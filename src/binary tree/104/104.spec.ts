/* 104. maximum depth of binary tree */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./104a";
import { B } from "./104b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tree: [1, 2, 3, null, null, 4],
        output: 3,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Maximum Depth of Binary Tree", () => {
        testCases.forEach(({ tree, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.maxDepth(root);

                expect(ans).toEqual(output);
            });
        });
    });
});