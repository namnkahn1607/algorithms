/* 94. binary tree inorder traversal */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./94a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        tree: [
            1, 2, 3, 4, 5, 6, 7, null, null,
            8, 9, null, null, null, 10
        ],
        output: [
            4, 2, 8, 5, 9, 1, 6, 3, 7, 10
        ],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Binary Tree Inorder Traversal", () => {
        testCases.forEach(({ tree, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.inorderTraversal(root);

                expect(ans).toEqual(output);
            });
        });
    });
});