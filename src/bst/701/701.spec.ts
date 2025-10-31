/* 701. insert into BST */

import { describe, expect, it } from "vitest";
import { BST, TreeNode } from "../BST";
import { A } from './701a';
import { B } from './701b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tree: [5, 3, 6, null, 4, null, 10, null, null, 7],
        x: 2,
        output: [
            5, 3, 6, 2, 4, null, 10, null, null, null, null, 7
        ],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Insert Binary Search Tree', () => {
        testCases.forEach(({ tree, x, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BST.create(tree);
                const ans = solution.insertIntoBST(root, x);

                expect(BST.toArray(ans)).toEqual(output);
            });
        });
    });
});