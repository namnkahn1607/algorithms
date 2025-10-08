/* 105. construct binary tree from preorder and inorder traversal */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class ConstructTree {
    abstract buildTree(preorder: number[], inorder: number[]): TreeNode | null;

    public static run(sol: ConstructTree): void {
        const preorder: number[] = [1, 2, 3, 4];
        const inorder: number[] = [2, 1, 3, 4];

        console.log(BinaryTree.convertToArray(sol.buildTree(preorder, inorder)).map(val => {
            return val === null ? "null": val;
        }).join(" "));
    }
}

export { ConstructTree };