# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > basic > 2`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.jsx"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["jsx"]
	loc: Object {
		filename: "input.jsx"
		end: Object {
			column: 11
			index: 11
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.jsx"
				end: Object {
					column: 11
					index: 11
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSXElement {
				name: JSXNamespacedName {
					name: JSXIdentifier {
						name: "a"
						loc: Object {
							filename: "input.jsx"
							end: Object {
								column: 4
								index: 4
								line: 1
							}
							start: Object {
								column: 3
								index: 3
								line: 1
							}
						}
					}
					loc: Object {
						filename: "input.jsx"
						end: Object {
							column: 4
							index: 4
							line: 1
						}
						start: Object {
							column: 1
							index: 1
							line: 1
						}
					}
					namespace: JSXIdentifier {
						name: "n"
						loc: Object {
							filename: "input.jsx"
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
				children: Array []
				selfClosing: true
				typeArguments: undefined
				loc: Object {
					filename: "input.jsx"
					end: Object {
						column: 11
						index: 11
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				attributes: Array [
					JSXAttribute {
						name: JSXNamespacedName {
							name: JSXIdentifier {
								name: "v"
								loc: Object {
									filename: "input.jsx"
									end: Object {
										column: 8
										index: 8
										line: 1
									}
									start: Object {
										column: 7
										index: 7
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.jsx"
								end: Object {
									column: 8
									index: 8
									line: 1
								}
								start: Object {
									column: 5
									index: 5
									line: 1
								}
							}
							namespace: JSXIdentifier {
								name: "n"
								loc: Object {
									filename: "input.jsx"
									end: Object {
										column: 6
										index: 6
										line: 1
									}
									start: Object {
										column: 5
										index: 5
										line: 1
									}
								}
							}
						}
						value: undefined
						loc: Object {
							filename: "input.jsx"
							end: Object {
								column: 8
								index: 8
								line: 1
							}
							start: Object {
								column: 5
								index: 5
								line: 1
							}
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
✔ No known problems!

```
