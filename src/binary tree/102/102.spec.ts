/* 102. binary tree level order traversal */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./102a";
import { B } from "./102b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tree: [3, 9, 20, null, null, 15, 7],
        output: [[3], [9, 20], [15, 7]],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Binary Tree Level Order Traversal", () => {
        testCases.forEach(({ tree, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.levelOrder(root);

                expect(ans).toEqual(output);
            });
        });
    });
});