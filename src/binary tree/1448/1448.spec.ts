/* 1448. count good nodes in binary tree */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./1448a";
import { B } from "./1448b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tree: [2, 4, 4, 4, null, 1, 3, null, null, 5,
            null, null, null, null, 5, 4, 4],
        output: 6,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Count Good Nodes in Binary Tree', () => {
        testCases.forEach(({ tree, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.goodNodes(root);

                expect(ans).toEqual(output);
            });
        });
    });
});