/* 105. construct binary tree from preorder and inorder */

import { describe, expect, it } from "vitest";
import { BinaryTree, TreeNode } from "../binary tree";
import { A } from "./105a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        tree1: [1, 2, 3, 4],
        tree2: [2, 1, 3, 4],
        output: [1, 2, 3, null, null, null, 4],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Construct Binary Tree From Preorder and Inorder", () => {
        testCases.forEach(({ tree1, tree2, output, description }) => {
            it(description, () => {
                const ans: TreeNode | null = solution.buildTree(tree1, tree2);

                expect(BinaryTree.toArray(ans)).toEqual(output);
            });
        });
    });
});