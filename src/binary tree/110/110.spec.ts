/* 110. balanced binary tree */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./110a";
import { B } from "./110b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tree: [3, 9, 20, null, null, 15, 7],
        output: true,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Balanced Binary Tree", () => {
        testCases.forEach(({ tree, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.isBalanced(root);

                expect(ans).toEqual(output);
            });
        });
    });
});