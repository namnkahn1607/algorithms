/* 98. validate binary search tree */

import { describe, expect, it } from "vitest";
import { BST, TreeNode } from "../BST";
import { A } from './98a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        tree: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
        output: true,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Validate Binary Search Tree', () => {
        testCases.forEach(({ tree, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BST.create(tree);
                const ans = solution.isValidBST(root);

                expect(ans).toEqual(output);
            });
        });
    });
});