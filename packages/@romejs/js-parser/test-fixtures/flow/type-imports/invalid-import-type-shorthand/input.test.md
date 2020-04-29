# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `flow > type-imports > invalid-import-type-shorthand`

```javascript
Program {
  comments: Array []
  corrupt: false
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'module'
  syntax: Array [
    'jsx'
    'flow'
  ]
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 37
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'module'
        end: Object {
          column: 15
          index: 15
          line: 1
        }
        start: Object {
          column: 15
          index: 15
          line: 1
        }
      }
    }
  ]
  body: Array [
    ImportDeclaration {
      defaultSpecifier: undefined
      importKind: 'typeof'
      namespaceSpecifier: undefined
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 36
          index: 36
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      source: StringLiteral {
        value: 'foo'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 35
            index: 35
            line: 1
          }
          start: Object {
            column: 30
            index: 30
            line: 1
          }
        }
      }
      namedSpecifiers: Array [
        ImportSpecifier {
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 23
              index: 23
              line: 1
            }
            start: Object {
              column: 15
              index: 15
              line: 1
            }
          }
          imported: Identifier {
            name: 't'
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 23
                index: 23
                line: 1
              }
              start: Object {
                column: 22
                index: 22
                line: 1
              }
            }
          }
          local: ImportSpecifierLocal {
            name: BindingIdentifier {
              name: 't'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 23
                  index: 23
                  line: 1
                }
                start: Object {
                  column: 22
                  index: 22
                  line: 1
                }
              }
            }
            importKind: 'typeof'
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 23
                index: 23
                line: 1
              }
              start: Object {
                column: 15
                index: 15
                line: 1
              }
            }
          }
        }
      ]
    }
  ]
}
```