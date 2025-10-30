/* 144. binary tree preorder traversal */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./144a";

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
            1, 2, 4, 5, 8, 9, 3, 6, 7, 10
        ],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Binary Tree Preorder Traversal", () => {
        testCases.forEach(({ tree, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.preorderTraversal(root);

                expect(ans).toEqual(output);
            });
        });
    });
});