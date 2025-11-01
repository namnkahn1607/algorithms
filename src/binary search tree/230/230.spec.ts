/* 230. k-th smallest integer in a BST */

import { describe, expect, it } from "vitest";
import { BST, TreeNode } from "../BST";
import { A } from './230a';
import { B } from './230b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tree: [4, 3, 5, 2, null],
        k: 4,
        output: 5,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('K-th Smallest Integer in a BST', () => {
        testCases.forEach(({ tree, k, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BST.create(tree);
                const ans = solution.kthSmallest(root, k);

                expect(ans).toEqual(output);
            });
        });
    });
});