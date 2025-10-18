/* 94. binary tree inorder traversal */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class Inorder {
    abstract inorderTraversal(root: TreeNode | null): number[];

    public static run(sol: Inorder): void {
        const root: TreeNode | null = BinaryTree.create(
            [1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, null, null, null, 10]
        );

        console.log(sol.inorderTraversal(root).join(" "));
        console.log(BinaryTree.inOrder(root).join(" "));
    }
}

export { Inorder };