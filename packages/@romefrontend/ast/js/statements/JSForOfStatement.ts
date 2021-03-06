/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
	AnyJSExpression,
	AnyJSStatement,
	AnyJSTargetAssignmentPattern,
	JSVariableDeclaration,
	NodeBaseWithComments,
} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export type JSForOfStatement = NodeBaseWithComments & {
	type: "JSForOfStatement";
	await?: boolean;
	left: JSVariableDeclaration | AnyJSTargetAssignmentPattern;
	right: AnyJSExpression;
	body: AnyJSStatement;
};

export const jsForOfStatement = createBuilder<JSForOfStatement>(
	"JSForOfStatement",
	{
		bindingKeys: {},
		visitorKeys: {
			left: true,
			right: true,
			body: true,
		},
	},
);
