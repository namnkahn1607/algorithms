/* 1372. longest zigzag path in binary tree */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./1372";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        tree: [1, 1, 1, null, 1, null, null, 1, 1, null, 1],
        output: 4,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Longest Zigzag Path in Binary Tree', () => {
        testCases.forEach(({tree, output, description}) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.longestZigZag(root);

                expect(ans).toEqual(output);
            });
        });
    });
});