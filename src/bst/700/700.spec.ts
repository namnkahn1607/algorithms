/* 700. search in a BST */

import { describe, expect, it } from "vitest";
import { BST, TreeNode } from "../BST";
import { A } from './700a';
import { B } from './700b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tree: [4, 2, 7, 1, 3],
        val: 2,
        output: [2, 1, 3],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Search in a Binary Search Tree', () => {
        testCases.forEach(({ tree, val, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BST.create(tree);
                const ans = solution.searchBST(root, val);

                expect(BST.toArray(ans)).toEqual(output);
            });
        });
    });
});