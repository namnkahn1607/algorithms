/* 872. leaf similar tree */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./872a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        tree1: [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
        tree2: [
            3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8
        ],
        output: true,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Leaf Similar Tree", () => {
        testCases.forEach(({ tree1, tree2, output, description }) => {
            it(description, () => {
                const root1: TreeNode | null = BinaryTree.create(tree1);
                const root2: TreeNode | null = BinaryTree.create(tree2);
                const ans = solution.leafSimilar(root1, root2);

                expect(ans).toEqual(output);
            });
        });
    });
});