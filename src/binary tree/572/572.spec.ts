/* 572. subtree of another tree */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./572a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        tree: [
            1, null, 1, null, 1, null, 1, null, 1, null, 1, null,
            1, null, 1, null, 1, null, 1, null, 1, 2
        ],
        subtree: [
            1, null, 1, null, 1, null, 1, null, 1, null, 1, 2
        ],
        output: true,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Subtree of Another Tree", () => {
        testCases.forEach(({ tree, subtree, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const subroot: TreeNode | null = BinaryTree.create(subtree);
                const ans = solution.isSubtree(root, subroot);

                expect(ans).toEqual(output);
            });
        });
    });
});