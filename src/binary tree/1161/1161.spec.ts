/* 1161. maximum level sum of a binary tree */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./1161a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        tree: [
            989, null, 10250, 98693, -89388, null, null, null, -32127
        ],
        output: 2,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Maximum Level Sum of a Binary Tree", () => {
        testCases.forEach(({ tree, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.maxLevelSum(root);

                expect(ans).toEqual(output);
            });
        });
    });
});