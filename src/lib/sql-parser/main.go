package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"sort"
	"strconv"
	"time"

	"github.com/urfave/cli/v2"
	"vitess.io/vitess/go/vt/sqlparser"
)

// Result represents the parse result.
type Result struct {
	Statements Statements `json:"statements"`
	Error      *Error      `json:"error,omitempty"`
}

// Error represents an error.
type Error struct {
	Name    string `json:"name,omitempty"`
	Message string `json:"message,omitempty"`
}

// Statements represents all statements in the query.
type Statements = []Statement

// Statement represents a single statement in the query.
type Statement struct {
	Type   string              `json:"type"`
	Tables Tables              `json:"tables"`
	Tree   sqlparser.Statement `json:"tree"`
}

func main() {
	var query string

	app := &cli.App{
		Name:    "sqlparser",
		Version: "0.0.1",
		Usage:   "a simple cli to parse sql queries",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:        "query",
				Usage:       "query to parse (e.g. 'select * from test')",
				Destination: &query,
			},
		},
		Commands: []*cli.Command{
			{
				Name:    "parse",
				Aliases: []string{"v"},
				Usage:   "parse a sql query",
				Action: func(c *cli.Context) error {
					result := Result{}

					queries, err := sqlparser.SplitStatementToPieces(query)
					if err != nil {
						result.Error = &Error{Name: "SyntaxError", Message: err.Error()}
					} else {
						statements := Statements{}

						for _, query := range queries {
							tree, err := sqlparser.ParseStrictDDL(query)
							if err != nil {
								result.Error = &Error{Name: "SyntaxError", Message: err.Error()}
								break // if one query fails, the rest cannot be parsed
							} else {
								statements = append(statements, Statement{
									Tables: GetTables(tree),
									Tree:   tree,
									Type:   sqlparser.Preview(query).String(),
								})
							}
						}

						result.Statements = statements
					}

					resultJSON, _ := json.Marshal(&result)
					fmt.Println(string(resultJSON))
					return nil
				},
			},
		},
	}

	sort.Sort(cli.FlagsByName(app.Flags))
	sort.Sort(cli.CommandsByName(app.Commands))

	err := app.Run(os.Args)
	if err != nil {
		log.Fatal(err)
	}
}

// Tables represents an array of tables.
type Tables = []Table

// Table represents a SQL table.
type Table struct {
	Name    string       `json:"name"`
	Alias   string       `json:"alias,omitempty" bson:",omitempty"`
	Columns TableColumns `json:"columns"`
}

// TableColumns represents an array of table columns.
type TableColumns = []TableColumn

// TableColumn represents a SQL table column.
type TableColumn struct {
	Name     string      `json:"name"`
	Value    interface{} `json:"value"`
	TsType   string      `json:"tsType"`
	Operator string      `json:"operator"`
	InType   string      `json:"inType"` // list or expression
}

// Columns represents an array of columns.
type Columns = []Column

// Column represents a column.
type Column struct {
	Name       string
	TableAlias string
}

// Comparisons represents an array of comparisons.
type Comparisons = []Comparison

// Comparison represents a comparison expression.
type Comparison struct {
	Table    string
	Column   string
	Operator string
	Value    interface{}
	TsType   string
	InType   string
}

// GetTables gets all tables in the query.
func GetTables(tree sqlparser.SQLNode) Tables {
	columnNames := make(map[string]bool, 0)
	tableNames := make(map[string]bool, 0)
	comparisons := make(Comparisons, 0)
	columns := make(Columns, 0)
	tables := make(Tables, 0)

	// Walking the AST is expensive, so we'll do it once, grab all relevant information, and organize it later.
	_ = sqlparser.Walk(func(node sqlparser.SQLNode) (kontinue bool, err error) {
		switch node := node.(type) {
		case *sqlparser.AliasedTableExpr:
			tableName := sqlparser.GetTableName(node.Expr).CompliantName()
			if tableName != "" {
				tables = append(tables, Table{
					Name:    tableName,
					Alias:   node.As.CompliantName(),
					Columns: make([]TableColumn, 0),
				})
			}
		case *sqlparser.ColName:
			columnName := node.Name.CompliantName()
			if columnName != "" {
				columns = append(columns, Column{
					Name:       columnName,
					TableAlias: node.Qualifier.Name.CompliantName(),
				})
			}
		case sqlparser.TableName:
			tableName := node.Name.CompliantName()
			if tableName != "" {
				tableNames[tableName] = true
			}
		case *sqlparser.ComparisonExpr:
			if sqlparser.IsColName(node.Left) {
				left := node.Left.(*sqlparser.ColName)
				value := GetValueAndType(node.Right)

				if IsValue(node.Right) {
					comparisons = append(comparisons, Comparison{
						Table:    left.Qualifier.Name.CompliantName(),
						Column:   left.Name.CompliantName(),
						Operator: node.Operator,
						Value:    value.Value,
						TsType:   value.TsType,
						InType:   "expression",
					})
				}
			}
		case *sqlparser.Insert:
			rows := node.Rows.(sqlparser.Values)[0]
			for i, column := range node.Columns {
				value := GetValueAndType(rows[i])
				name := column.CompliantName()
				// This allows us to skip looking for `ColIdent`, which solves the problem that Vitess has
				// of misidentifying function calls as `ColIdent`
				columnNames[name] = true
				comparisons = append(comparisons, Comparison{
					Table:  node.Table.Name.CompliantName(),
					Column: column.CompliantName(),
					Value:  value.Value,
					TsType: value.TsType,
					InType: "list",
				})
			}
		}
		return true, nil
	}, tree)

	// create table for unaliased table names, and add to tables list
	for tableName := range tableNames {
		if nameInTables(tableName, tables) {
			continue
		}
		if tableAlias(tableName, tables) {
			continue
		}
		tables = append(tables, Table{
			Name:    tableName,
			Columns: make([]TableColumn, 0),
		})
	}

	// create column for unaliased column names, and add to columns list
	for columnName := range columnNames {
		if nameInColumns(columnName, columns) {
			continue
		}
		columns = append(columns, Column{
			Name: columnName,
		})
	}

	// merge columns into corresponding table
	for _, column := range columns {
		for j, table := range tables {
			if table.Alias != column.TableAlias {
				continue
			}
			if columnInTable(column.Name, table) {
				continue
			}
			table.Columns = append(table.Columns, TableColumn{
				Name: column.Name,
			})
			tables[j] = table
		}
	}

	for _, comparison := range comparisons {
		tableName := comparison.Table

		if tableName == "" {
			if len(tables) != 1 {
				continue
			}
			tableName = tables[0].Name
		}

		for _, table := range tables {
			if table.Name != tableName {
				continue
			}

			for j, column := range table.Columns {
				if column.Name != comparison.Column {
					continue
				}

				column.Operator = comparison.Operator
				column.TsType = comparison.TsType
				column.Value = comparison.Value
				column.InType = comparison.InType

				table.Columns[j] = column
			}
		}
	}

	return tables
}

// IsValue returns true if the Expr is a string, integral or value arg.
// NULL is not considered to be a value.
func IsValue(node sqlparser.Expr) bool {
	switch v := node.(type) {
	case *sqlparser.SQLVal:
		switch v.Type {
		case sqlparser.StrVal, sqlparser.HexVal, sqlparser.IntVal, sqlparser.ValArg:
			return true
		}
	case sqlparser.BoolVal:
		{
			return true
		}
	case *sqlparser.NullVal:
		{
			return true
		}
	}
	return false
}

// SQLValue represents a SQL value.
type SQLValue struct {
	Value  interface{}
	TsType string
}

// GetValueAndType returns the SQLValue for an expression.
func GetValueAndType(node sqlparser.Expr) SQLValue {
	switch v := node.(type) {
	case *sqlparser.SQLVal:
		switch v.Type {
		case sqlparser.StrVal:
			value := string(v.Val)

			_, err := time.Parse(time.RFC3339, value)
			if err == nil {
				return SQLValue{
					Value:  value,
					TsType: "date",
				}
			}

			return SQLValue{
				Value:  string(v.Val),
				TsType: "string",
			}
		case sqlparser.IntVal, sqlparser.FloatVal, sqlparser.HexNum, sqlparser.HexVal:
			value, _ := strconv.ParseInt(string(v.Val), 0, 64)
			return SQLValue{
				Value:  int(value),
				TsType: "number",
			}
		}
	case sqlparser.BoolVal:
		value := false
		if v {
			value = true
		}
		return SQLValue{
			Value:  value,
			TsType: "boolean",
		}
	case *sqlparser.NullVal:
		return SQLValue{
			Value:  nil,
			TsType: "null",
		}
	}
	return SQLValue{}
}

func nameInTables(name string, tables []Table) bool {
	for _, table := range tables {
		if name == table.Name {
			return true
		}
	}
	return false
}

func nameInColumns(name string, columns []Column) bool {
	for _, column := range columns {
		if name == column.Name {
			return true
		}
	}
	return false
}

func columnInTable(name string, table Table) bool {
	for _, column := range table.Columns {
		if name == column.Name {
			return true
		}
	}
	return false
}

func tableAlias(name string, tables []Table) bool {
	for _, table := range tables {
		if name == table.Alias {
			return true
		}
	}
	return false
}
