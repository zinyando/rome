# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-template-literals > unclosed-nested`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 19
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
			origins: Array [Object {category: "parse/js"}]
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 7
					index: 7
					line: 1
				}
				start: Object {
					column: 7
					index: 7
					line: 1
				}
			}
			description: Object {
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unclosed template expression value"}
				advice: Array [
					log {
						category: "info"
						text: "We expected to find the closing character <emphasis>}</emphasis> here"
					}
					frame {
						location: Object {
							filename: "input.js"
							end: Object {
								column: 0
								index: 19
								line: 2
							}
							start: Object {
								column: 0
								index: 19
								line: 2
							}
						}
					}
				]
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 0
					index: 19
					line: 2
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSTemplateLiteral {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 0
						index: 19
						line: 2
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				quasis: Array [
					JSTemplateElement {
						cooked: "hello "
						raw: "hello "
						tail: false
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 7
								index: 7
								line: 1
							}
							start: Object {
								column: 1
								index: 1
								line: 1
							}
						}
					}
					JSTemplateElement {
						cooked: ""
						raw: ""
						tail: false
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 0
								index: 19
								line: 2
							}
							start: Object {
								column: 0
								index: 19
								line: 2
							}
						}
					}
				]
				expressions: Array [
					JSTaggedTemplateExpression {
						typeArguments: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 18
								index: 18
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
						tag: JSNumericLiteral {
							value: 10
							format: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 11
									index: 11
									line: 1
								}
								start: Object {
									column: 9
									index: 9
									line: 1
								}
							}
						}
						quasi: JSTemplateLiteral {
							expressions: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 18
									index: 18
									line: 1
								}
								start: Object {
									column: 12
									index: 12
									line: 1
								}
							}
							quasis: Array [
								JSTemplateElement {
									cooked: "test"
									raw: "test"
									tail: true
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 17
											index: 17
											line: 1
										}
										start: Object {
											column: 13
											index: 13
											line: 1
										}
									}
								}
							]
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 input.js:1:7 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unclosed template expression value

  ℹ We expected to find the closing character } here

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
