/* 1325. delete leaves with a given value */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./1325a";
import { B } from "./1325b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tree: [1, 2, 3, null, 2, 2, 5],
        target: 2,
        output: [1, null, 3, null, 5],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Delete Leaves with a Given Value", () => {
        testCases.forEach(({ tree, target, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.removeLeafNodes(root, target);

                expect(BinaryTree.toArray(ans)).toEqual(output);
            });
        });
    });
});