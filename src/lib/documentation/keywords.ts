interface SQLKeywordData {
  readonly version: number
  readonly keywords: SQLKeyword[]
}

export interface SQLKeywordReference {
  readonly name: string
  readonly url: string
}

interface SQLKeyword {
  readonly name: string
  readonly category: string
  readonly description: string
  readonly codeExample: string
  readonly reference: SQLKeywordReference
}

export const keywordData: SQLKeywordData = {
  version: 5.7,
  keywords: [
    {
      name: 'SELECT',
      category: 'DML',
      description: 'Retrieves rows from one or more tables.',
      codeExample: 'SELECT foo FROM bar',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/select.html'
      }
    },
    {
      name: 'DELETE',
      category: 'DML',
      description: 'Deletes rows from a table.',
      codeExample: 'DELETE FROM foo',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/delete.html'
      }
    },
    {
      name: 'CREATE',
      category: 'DDL',
      description: 'Creates either a database or a table.',
      codeExample: 'CREATE TABLE foo (\n  bar INT\n)',
      reference: {
        name: 'W3 Reference',
        url: 'https://www.w3schools.com/sql/sql_ref_create.asp'
      }
    },
    {
      name: 'ALTER',
      category: 'DDL',
      description: 'Adds, deletes, or modifies columns in a table, or changes the data type of a column in a table.',
      codeExample: 'ALTER TABLE foo ADD bar INT',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/alter-table.html'
      }
    },
    {
      name: 'INSERT',
      category: 'DML',
      description: 'Inserts new rows in a table.',
      codeExample: 'INSERT INTO foo (bar)\nVALUES ("baz")',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/insert.html'
      }
    },
    {
      name: 'UPDATE',
      category: 'DML',
      description: 'Modifies existing rows in a table.',
      codeExample: 'UPDATE foo SET bar = "baz"',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/update.html'
      }
    },
    {
      name: 'TRUNCATE',
      category: 'DDL',
      description: 'Deletes the data inside a table, but not the table itself.',
      codeExample: 'TRUNCATE TABLE foo',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/truncate-table.html'
      }
    },
    {
      name: 'INNER',
      category: 'DML',
      description: 'Returns rows that have matching values in both tables.',
      codeExample: 'SELECT f.id, b.slug\nFROM foo f\nINNER JOIN bar b\nON b.foo_id = f.id',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/join.html'
      }
    },
    {
      name: 'WHERE',
      category: 'DML',
      description: 'Filters a result to include only records that fulfill a specified condition.',
      codeExample: 'SELECT foo FROM bar\nWHERE foo = 1',
      reference: {
        name: 'W3 Reference',
        url: 'https://www.w3schools.com/sql/sql_ref_where.asp'
      }
    },
    {
      name: 'FROM',
      category: 'DML',
      description: 'Specifies which table to select or delete data from.',
      codeExample: 'SELECT foo FROM bar',
      reference: {
        name: 'W3 Reference',
        url: 'https://www.w3schools.com/sql/sql_ref_from.asp'
      }
    },
    {
      name: 'VALUES',
      category: 'DML',
      description: 'Specifies the values of an INSERT INTO statement.',
      codeExample: 'INSERT INTO foo (bar)\nVALUES ("baz")',
      reference: {
        name: 'W3 Reference',
        url: 'https://www.w3schools.com/sql/sql_ref_values.asp'
      }
    },
    {
      name: 'INTO',
      category: 'DML',
      description: 'Used in an INSERT INTO statement.',
      codeExample: 'INSERT INTO foo (bar)\nVALUES ("baz")',
      reference: {
        name: 'W3 Reference',
        url: 'https://www.w3schools.com/sql/sql_ref_insert_into.asp'
      }
    },
    {
      name: 'JOIN',
      category: 'DML',
      description: 'Joins tables. Can be INNER JOIN, LEFT JOIN, RIGHT JOIN, or FULL OUTER JOIN.',
      codeExample: 'SELECT f.id, b.slug\nFROM foo f\nINNER JOIN bar b\nON b.foo_id = f.id',
      reference: {
        name: 'W3 Reference',
        url: 'https://www.w3schools.com/sql/sql_ref_join.asp'
      }
    },
    {
      name: 'IN',
      category: 'DML',
      description: 'Used to specify multiple values in a WHERE clause.',
      codeExample: 'SELECT * FROM foo\nWHERE bar IN (1, 2, 3)',
      reference: {
        name: 'W3 Reference',
        url: 'https://www.w3schools.com/sql/sql_ref_in.asp'
      }
    },
    {
      name: 'OR',
      category: 'DML',
      description: 'Includes rows where either condition is true.',
      codeExample: 'SELECT * FROM foo\nWHERE bar = "bar1" OR bar = "bar2"',
      reference: {
        name: 'W3 Reference',
        url: 'https://www.w3schools.com/sql/sql_ref_or.asp'
      }
    },
    {
      name: 'UNIQUE',
      category: 'DDL',
      description: 'A constraint that ensures that all values in a column are unique.',
      codeExample: 'CREATE TABLE foo (\n  bar INT UNIQUE\n)',
      reference: {
        name: 'W3 Reference',
        url: 'https://www.w3schools.com/sql/sql_ref_unique.asp'
      }
    },
    {
      name: 'INDEX',
      category: 'DDL',
      description: 'Indexes are used to retrieve data from the database very fast.',
      codeExample: 'CREATE INDEX foo ON bar (baz)',
      reference: {
        name: 'W3 Reference',
        url: 'https://www.w3schools.com/sql/sql_ref_index.asp'
      }
    },
    {
      name: 'LIMIT',
      category: 'DDL',
      description: 'Specifies the number of records to return in the result set.',
      codeExample: 'SELECT * FROM foo LIMIT 5',
      reference: {
        name: 'W3 Reference',
        url: 'https://www.w3schools.com/sql/sql_ref_top.asp'
      }
    },
    {
      name: 'CHAR',
      category: 'DDL',
      description: 'A fixed length string of optional size between 0 and 255. Default is 1.',
      codeExample: 'CREATE TABLE foo (\n  bar CHAR(10)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/char.html'
      }
    },
    {
      name: 'VARCHAR',
      category: 'DDL',
      description: 'A variable length string. Size parameter specifies maximum length between 0 and 65,535.',
      codeExample: 'CREATE TABLE foo (\n  bar VARCHAR(50)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/char.html'
      }
    },
    {
      name: 'BINARY',
      category: 'DDL',
      description: 'Stores fixed length binary byte strings. Size specifies column length in bytes. Default is 1.',
      codeExample: 'CREATE TABLE foo (\n  bar BINARY(10)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/binary-varbinary.html'
      }
    },
    {
      name: 'VARBINARY',
      category: 'DDL',
      description: 'Stores variable length binary byte strings. Size specifies maximum column length in bytes.',
      codeExample: 'CREATE TABLE foo (\n  bar VARBINARY(10)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/binary-varbinary.html'
      }
    },
    {
      name: 'TINYBLOB',
      category: 'DDL',
      description: 'A tiny BLOB (Binary Large Objects). Max length of 255 bytes.',
      codeExample: 'CREATE TABLE foo (\n  bar TINYBLOB\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/blob.html'
      }
    },
    {
      name: 'TINYTEXT',
      category: 'DDL',
      description: 'Holds a string with a maximum length of 255 characters.',
      codeExample: 'CREATE TABLE foo (\n  bar TINYTEXT\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/blob.html'
      }
    },
    {
      name: 'TEXT',
      category: 'DDL',
      description: 'Holds a string with a maximum length of 65,535 bytes.',
      codeExample: 'CREATE TABLE foo (\n  bar TEXT(10)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/blob.html'
      }
    },
    {
      name: 'BLOB',
      category: 'DDL',
      description: 'A BLOB (Binary Large Object). Max length of 65,535 bytes.',
      codeExample: 'CREATE TABLE foo (\n  bar BLOB(10)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/blob.html'
      }
    },
    {
      name: 'MEDIUMTEXT',
      category: 'DDL',
      description: 'Holds a string with a maximum length of 16,777,215 characters.',
      codeExample: 'CREATE TABLE foo (\n  bar MEDIUMTEXT\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/blob.html'
      }
    },
    {
      name: 'MEDIUMBLOB',
      category: 'DDL',
      description: 'A BLOB (Binary Large Object). Max length of 16,777,215 bytes.',
      codeExample: 'CREATE TABLE foo (\n  bar MEDIUMBLOB\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/blob.html'
      }
    },
    {
      name: 'LONGTEXT',
      category: 'DDL',
      description: 'Holds a string with a maximum length of 4,294,967,295 characters.',
      codeExample: 'CREATE TABLE foo (\n  bar LONGTEXT\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/blob.html'
      }
    },
    {
      name: 'LONGBLOB',
      category: 'DDL',
      description: 'A BLOB (Binary Large Object). Max length of 4,294,967,295 bytes.',
      codeExample: 'CREATE TABLE foo (\n  bar LONGBLOB\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/blob.html'
      }
    },
    {
      name: 'ENUM',
      category: 'DDL',
      description: 'A string object that can only have one value, chosen from a list of possible values.',
      codeExample: 'CREATE TABLE foo (\n  bar ENUM("1", "2", "3")\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/enum.html'
      }
    },
    {
      name: 'SET',
      category: 'DDL',
      description: 'A string object that can have 0 or more values, chosen from a list of possible values.',
      codeExample: 'CREATE TABLE foo (\n  bar SET("1", "2", "3")\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/set.html'
      }
    },
    {
      name: 'BIT',
      category: 'DDL',
      description: 'A bit-value type. The number of bits per value is specified in size.',
      codeExample: 'CREATE TABLE foo (\n  bar BIT(1)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/bit-type.html'
      }
    },
    {
      name: 'TINYINT',
      category: 'DDL',
      description: 'A very small integer. Signed range is from -128 to 127. Unsigned range is from 0 to 255.',
      codeExample: 'CREATE TABLE foo (\n  bar TINYINT(1)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html'
      }
    },
    {
      name: 'BOOL',
      category: 'DDL',
      description: 'Zero is considered as false, nonzero values are considered as true.',
      codeExample: 'CREATE TABLE foo (\n  bar BOOL\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html'
      }
    },
    {
      name: 'BOOLEAN',
      category: 'DDL',
      description: 'Zero is considered as false, nonzero values are considered as true.',
      codeExample: 'CREATE TABLE foo (\n  bar BOOLEAN\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html'
      }
    },
    {
      name: 'SMALLINT',
      category: 'DDL',
      description: 'A small integer. Signed range is from -32768 to 32767. Unsigned range is from 0 to 65535.',
      codeExample: 'CREATE TABLE foo (\n  bar SMALLINT(1)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html'
      }
    },
    {
      name: 'MEDIUMINT',
      category: 'DDL',
      description: 'A medium integer. Signed range is from -8388608 to 8388607. Unsigned range is from 0 to 16777215.',
      codeExample: 'CREATE TABLE foo (\n  bar MEDIUMINT(1)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html'
      }
    },
    {
      name: 'INT',
      category: 'DDL',
      description:
        'An integer. Signed range is from -2147483648 to 2147483647. Unsigned range is from 0 to 4294967295.',
      codeExample: 'CREATE TABLE foo (\n  bar INT(1)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html'
      }
    },
    {
      name: 'INTEGER',
      category: 'DDL',
      description:
        'An integer. Signed range is from -2147483648 to 2147483647. Unsigned range is from 0 to 4294967295.',
      codeExample: 'CREATE TABLE foo (\n  bar INTEGER(1)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html'
      }
    },
    {
      name: 'BIGINT',
      category: 'DDL',
      description:
        'A large integer. Signed range is from -9223372036854775808 to 9223372036854775807. Unsigned range is from 0 to 18446744073709551615.',
      codeExample: 'CREATE TABLE foo (\n  bar BIGINT(1)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html'
      }
    },
    {
      name: 'FLOAT',
      category: 'DDL',
      description: 'A floating point number. The total number of digits is specified in size.',
      codeExample: 'CREATE TABLE foo (\n  bar FLOAT(1)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/floating-point-types.html'
      }
    },
    {
      name: 'DOUBLE',
      category: 'DDL',
      description: 'A normal-size floating point number. The total number of digits is specified in size.',
      codeExample: 'CREATE TABLE foo (\n  bar FLOAT(1)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/floating-point-types.html'
      }
    },
    {
      name: 'DECIMAL',
      category: 'DDL',
      description: 'An exact fixed-point number. The total number of digits is specified in size.',
      codeExample: 'CREATE TABLE foo (\n  bar DECIMAL(1)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/fixed-point-types.html'
      }
    },
    {
      name: 'DEC',
      category: 'DDL',
      description: 'An exact fixed-point number. The total number of digits is specified in size.',
      codeExample: 'CREATE TABLE foo (\n  bar DEC(1)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/fixed-point-types.html'
      }
    },
    {
      name: 'DATE',
      category: 'DDL',
      description: 'A date. Format: YYYY-MM-DD. The supported range is from "1000-01-01" to "9999-12-31".',
      codeExample: 'CREATE TABLE foo (\n  bar DATE\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/datetime.html'
      }
    },
    {
      name: 'DATETIME',
      category: 'DDL',
      description:
        'A date and time combination. Format: YYYY-MM-DD hh:mm:ss. The supported range is from "1000-01-01 00:00:00" to "9999-12-31 23:59:59".',
      codeExample: 'CREATE TABLE foo (\n  bar DATETIME\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/datetime.html'
      }
    },
    {
      name: 'TIMESTAMP',
      category: 'DDL',
      description:
        'A timestamp. TIMESTAMP values are stored as the number of seconds since the Unix epoch ("1970-01-01 00:00:00" UTC).',
      codeExample: 'CREATE TABLE foo (\n  bar TIMESTAMP\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/datetime.html'
      }
    },
    {
      name: 'TIME',
      category: 'DDL',
      description: 'A time. Format: hh:mm:ss. The supported range is from "-838:59:59" to "838:59:59"',
      codeExample: 'CREATE TABLE foo (\n  bar TIME\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/time.html'
      }
    },
    {
      name: 'YEAR',
      category: 'DDL',
      description: 'A year in four-digit format. Values allowed in four-digit format: 1901 to 2155, and 0000.',
      codeExample: 'CREATE TABLE foo (\n  bar YEAR\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/year.html'
      }
    },
    {
      name: 'JSON',
      category: 'DDL',
      description: 'Stores JSON documents. Do NOT use this type if you can avoid it.',
      codeExample: 'CREATE TABLE foo (\n  bar JSON\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/json.html'
      }
    },
    {
      name: 'AUTO_INCREMENT',
      category: 'DDL',
      description: 'Generates a unique identity for new rows.',
      codeExample: 'CREATE TABLE foo (\n  bar INT AUTO_INCREMENT\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/example-auto-increment.html'
      }
    },
    {
      name: 'ZEROFILL',
      category: 'DDL',
      description: 'Pads the displayed value of the field with zeros up to the display width.',
      codeExample: 'CREATE TABLE foo (\n  bar INT(4) ZEROFILL\n)',
      reference: {
        name: 'StackOverflow Reference',
        url: 'https://stackoverflow.com/questions/5256469/what-is-the-benefit-of-zerofill-in-mysql'
      }
    },
    {
      name: 'REFERENCES',
      category: 'DDL',
      description: 'Used to define a foreign key constraint on a column.',
      codeExample: 'CREATE TABLE foo (\n  bar INT,\n  FOREIGN KEY (bar) REFERENCES baz(id)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/create-table-foreign-keys.html'
      }
    },
    {
      name: 'PRIMARY',
      category: 'DDL',
      description: 'Used as a key constraint to uniquely identify each record in a table.',
      codeExample: 'CREATE TABLE foo (\n  bar INT,\n  PRIMARY KEY (bar)\n)',
      reference: {
        name: 'W3 Reference',
        url: 'https://www.w3schools.com/sql/sql_primarykey.asp'
      }
    },
    {
      name: 'NOT',
      category: 'DDL/DML',
      description: 'Logical NOT operator. Used in expressions and in table definitions.',
      codeExample: 'CREATE TABLE foo (\n  bar INT NOT NULL\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/logical-operators.html#operator_not'
      }
    },
    {
      name: 'NULL',
      category: 'DDL/DML',
      description: 'Means "no data". Used in expressions and in table definitions.',
      codeExample: 'CREATE TABLE foo (\n  bar INT NOT NULL\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/null-values.html'
      }
    },
    {
      name: 'KEY',
      category: 'DDL',
      description: 'Analogous to `INDEX`. Used to find rows quickly.',
      codeExample: 'CREATE TABLE foo (\n  bar INT, PRIMARY KEY (bar)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/create-table.html'
      }
    },
    {
      name: 'CASCADE',
      category: 'DDL',
      description: 'Used to indicate that MySQL should delete or update referenced records.',
      codeExample: 'CREATE TABLE foo (\n  bar INT,\n  FOREIGN KEY (bar) REFERENCES baz (id) ON DELETE CASCADE\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/create-table-foreign-keys.html'
      }
    },
    {
      name: 'FOREIGN',
      category: 'DDL',
      description: 'Used to define a foreign key constraint on a column.',
      codeExample: 'CREATE TABLE foo (\n  bar INT,\n  FOREIGN KEY (bar) REFERENCES baz(id)\n)',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/create-table-foreign-keys.html'
      }
    },
    {
      name: 'ON',
      category: 'DDL/DML',
      description: 'Typically used to join tables where the column names do not match in both tables.',
      codeExample: 'SELECT * FROM foo.bar\nJOIN foo.baz ON (bar.baz_id = baz.id)',
      reference: {
        name: 'StackOverflow Reference',
        url: 'https://stackoverflow.com/questions/11366006/mysql-on-vs-using?noredirect=1&lq=1'
      }
    },
    {
      name: 'TABLE',
      category: 'DDL/DML',
      description: 'Represents a collection of related data held in a table format. Consists of columns and rows.',
      codeExample: 'CREATE TABLE foo (\n  bar INT\n)',
      reference: {
        name: 'Wikipedia Reference',
        url: 'https://en.wikipedia.org/wiki/Table_(database)'
      }
    },
    {
      name: 'DATABASE',
      category: 'DDL/DML',
      description: 'Represents an organized collection of data, often stored in individual tables.',
      codeExample: 'CREATE DATABASE foo',
      reference: {
        name: 'Wikipedia Reference',
        url: 'https://en.wikipedia.org/wiki/Database'
      }
    },
    {
      name: 'USE',
      category: 'Utility',
      description: 'Tells MySQL to use the named database as the default (current) database for subsequent statements.',
      codeExample: 'USE foo',
      reference: {
        name: 'MySQL Reference',
        url: 'https://dev.mysql.com/doc/refman/5.7/en/use.html'
      }
    }
  ]
}
