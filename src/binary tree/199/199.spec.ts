/* 199. binary tree right side view */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from './199a';
import { B } from './199b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tree: [1, 2, 3, 4, 5, 6, 7, null, 8],
        output: [1, 3, 7, 8],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Binary Tree Right Side View', () => {
        testCases.forEach(({ tree, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.rightSideView(root);

                expect(ans).toEqual(output);
            });
        });
    });
});