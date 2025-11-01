/* 235. lowest common ancestor of BST */

import { describe, expect, it } from "vitest";
import { BST, TreeNode } from "../BST";
import { A } from './235a';
import { B } from './235b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tree: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
        pVal: 2, qVal: 8,
        output: 6,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('K-th Smallest Integer in a BST', () => {
        testCases.forEach(({ tree, pVal, qVal, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BST.create(tree);
                const p = new TreeNode(pVal);
                const q = new TreeNode(qVal);

                const ans = solution.lowestCommonAncestor(root, p, q);

                expect(ans?.val).toEqual(output);
            });
        });
    });
});