/* 145. binary tree postorder traversal */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./145a";
import { B } from "./145b";
import { C } from "./145c";

const approaches = [
    { solution: new A() },
    { solution: new B() },
    { solution: new C() },
];

const testCases = [
    {
        tree: [
            1, 2, 3, 4, 5, 6, 7, null, null,
            8, 9, null, null, null, 10
        ],
        output: [
            4, 8, 9, 5, 2, 6, 10, 7, 3, 1
        ],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Binary Tree Postorder Traversal", () => {
        testCases.forEach(({ tree, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.postorderTraversal(root);

                expect(ans).toEqual(output);
            });
        });
    });
});