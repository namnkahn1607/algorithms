/* 100. same binary tree */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./100a";
import { B } from "./100b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tree1: [1, 2, 1],
        tree2: [1, 1, 2],
        output: false,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Same Binary Tree", () => {
        testCases.forEach(({ tree1, tree2, output, description }) => {
            it(description, () => {
                const p: TreeNode | null = BinaryTree.create(tree1);
                const q: TreeNode | null = BinaryTree.create(tree2);
                const ans = solution.isSameTree(p, q);

                expect(ans).toEqual(output);
            });
        });
    });
});