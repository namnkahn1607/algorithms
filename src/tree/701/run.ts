/* 701. insert into BST */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class insertBST {
    abstract insertIntoBST(root: TreeNode | null, x: number): TreeNode | null;

    public static run(sol: insertBST): void {
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [5, 3, 6, null, 4, null, 10, null, null, 7]
        );

        const x: number = 2;

        console.log(BinaryTree.convertToArray(sol.insertIntoBST(root, x)).map(
            val => val === null ? "null" : val
        ).join(" "));
    }
}

export { insertBST };