/* 1372. longest zigzag path in binary tree */

import { describe, expect, it } from "vitest";
import { A } from "./1372";
import { BinaryTree, TreeNode } from "../binary tree";

const approaches = [
    { name: "dfs + dp", solution: new A() },
];

const testCases = [
    {
        tree: [1, 1, 1, null, 1, null, null, 1, 1, null, 1],
        output: 4,
        description: 'a sample test',
    },
];

approaches.forEach(({ name, solution }) => {
    describe(`Longest Zigzag Path in Binary Tree - ${name}`, () => {
        testCases.forEach(({tree, output, description}) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.longestZigZag(root);

                expect(ans).toEqual(output);
            });
        });
    });
});