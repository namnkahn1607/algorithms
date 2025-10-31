/* 543. diameter of binary tree */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./543a";
import { B } from "./543b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tree: [2, null, 4],
        output: 1,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Diameter of Binary Tree", () => {
        testCases.forEach(({ tree, output, description }) => {
            it(description, () => {
                const root: TreeNode | null = BinaryTree.create(tree);
                const ans = solution.diameterOfBinaryTree(root);

                expect(ans).toEqual(output);
            });
        });
    });
});