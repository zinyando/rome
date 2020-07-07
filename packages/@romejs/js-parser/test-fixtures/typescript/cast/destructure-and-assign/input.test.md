# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > cast > destructure-and-assign`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "input.ts"
		end: Object {
			column: 0
			index: 42
			line: 3
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
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unexpected type cast in parameter position"}
			}
			location: Object {
				filename: "input.ts"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 12
					index: 12
					line: 1
				}
				start: Object {
					column: 1
					index: 1
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 21
					index: 21
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 20
						index: 20
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				right: JSArrayExpression {
					loc: Object {
						filename: "input.ts"
						end: Object {
							column: 20
							index: 20
							line: 1
						}
						start: Object {
							column: 16
							index: 16
							line: 1
						}
					}
					elements: Array [
						JSNumericLiteral {
							value: 42
							format: undefined
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 19
									index: 19
									line: 1
								}
								start: Object {
									column: 17
									index: 17
									line: 1
								}
							}
						}
					]
				}
				left: JSAssignmentArrayPattern {
					rest: undefined
					loc: Object {
						filename: "input.ts"
						end: Object {
							column: 13
							index: 13
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
					elements: Array [
						TSAssignmentAsExpression {
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 12
									index: 12
									line: 1
								}
								start: Object {
									column: 1
									index: 1
									line: 1
								}
							}
							typeAnnotation: TSNumberKeywordTypeAnnotation {
								loc: Object {
									filename: "input.ts"
									end: Object {
										column: 12
										index: 12
										line: 1
									}
									start: Object {
										column: 6
										index: 6
										line: 1
									}
								}
							}
							expression: JSAssignmentIdentifier {
								name: "a"
								loc: Object {
									filename: "input.ts"
									identifierName: "a"
									end: Object {
										column: 2
										index: 2
										line: 1
									}
									start: Object {
										column: 1
										index: 1
										line: 1
									}
								}
							}
						}
					]
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 19
					index: 41
					line: 2
				}
				start: Object {
					column: 0
					index: 22
					line: 2
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 18
						index: 40
						line: 2
					}
					start: Object {
						column: 0
						index: 22
						line: 2
					}
				}
				right: JSArrayExpression {
					loc: Object {
						filename: "input.ts"
						end: Object {
							column: 18
							index: 40
							line: 2
						}
						start: Object {
							column: 14
							index: 36
							line: 2
						}
					}
					elements: Array [
						JSNumericLiteral {
							value: 42
							format: undefined
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 17
									index: 39
									line: 2
								}
								start: Object {
									column: 15
									index: 37
									line: 2
								}
							}
						}
					]
				}
				left: JSAssignmentArrayPattern {
					rest: undefined
					loc: Object {
						filename: "input.ts"
						end: Object {
							column: 11
							index: 33
							line: 2
						}
						start: Object {
							column: 0
							index: 22
							line: 2
						}
					}
					elements: Array [
						TSAssignmentTypeAssertion {
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 10
									index: 32
									line: 2
								}
								start: Object {
									column: 1
									index: 23
									line: 2
								}
							}
							typeAnnotation: TSNumberKeywordTypeAnnotation {
								loc: Object {
									filename: "input.ts"
									end: Object {
										column: 8
										index: 30
										line: 2
									}
									start: Object {
										column: 2
										index: 24
										line: 2
									}
								}
							}
							expression: JSAssignmentIdentifier {
								name: "a"
								loc: Object {
									filename: "input.ts"
									identifierName: "a"
									end: Object {
										column: 10
										index: 32
										line: 2
									}
									start: Object {
										column: 9
										index: 31
										line: 2
									}
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 input.ts:1:1 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected type cast in parameter position

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```