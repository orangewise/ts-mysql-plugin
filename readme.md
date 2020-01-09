# ts-mysql-plugin (Alpha)

A typescript language service plugin that gives superpowers to SQL tagged template literals. Specifically aimed at the MySQL syntax.

![Alt Text](https://github.com/segmentio/ts-mysql-plugin/raw/master/.github/demo.gif)

## Features

- Autocomplete for MySQL keywords and table names/column names (powered by your schema).
- Semantic error checking - (e.g. using valid table names/column names in your schema).
- Hover documentation for all keywords (and always marked with a DDL/DML tag).
- Hover documentation for table names/column names (shows DDL table in hover).
- Syntax error checking.

## Development

Prerequisite: Go is required in order to build the binary for the MySQL parser.

Run the following:

```shell
go get
yarn install && yarn build
cd example-project && yarn install
cd .. && yarn watch
```

Navigate to `example-project/tsconfig.json` and change the plugin path name for your setup. Navigate to `example-project/src/index.ts` and you should see errors in the `invalid queries` section.

## Todos

### High Priority

- [ ] Ignore `Create` table table/column errors from schema
- [ ] E2E tests

### Low Priority

- [ ] Figure out how to use relative path in example-project/tsconfig.json
- [ ] Add support for `TEMPORARY` (e.g. `CREATE TEMPORARY TABLE`) in Vitess (or fork).
- [ ] Finish all keyword documentation.

## Note

TLDR; If anyone knows of a MySQL parser that can track node position, please let me know.

I can't find a MySQL parser with the ability to track node position. All the features in this plugin work around that problem. For example, when a user is hovering over a word, instead of finding the AST node corresponding to that word, we check all possibilities (e.g. is this a table name? is this a column name? is this a keyword?). Having the node itself would make this plugin far more accurate.
