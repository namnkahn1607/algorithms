/* 700. search in a BST */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class searchBST {
    abstract searchBST(root: TreeNode | null, val: number): TreeNode | null;

    public static run(sol: searchBST): void {
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [4, 2, 7, 1, 3]
        );
        const val: number = 2;

        console.log(BinaryTree.levelOrder(sol.searchBST(root, val)).join(" "));
    }
}

export { searchBST };