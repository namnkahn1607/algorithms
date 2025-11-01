/* 450. delete node in a BST */

import { describe, expect, it } from "vitest";
import { BST, TreeNode } from "../BST";
import { A } from './450a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        tree: [5, 3, 6, 2, 4, null, null, 7],
        key: 3,
        output: [5, 4, 6, 2, null, null, 7],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Delete Node in a BST', () => {
        testCases.forEach(({ tree, key, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BST.create(tree);
                const ans = solution.deleteNode(root, key);

                expect(BST.toArray(ans)).toEqual(output);
            });
        });
    });
});