/* 144. binary tree preorder traversal */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class Preorder {
    abstract preorderTraversal(root: TreeNode | null): number[];

    public static run(sol: Preorder): void {
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, null, null, null, 10]
        );

        console.log(sol.preorderTraversal(root).join(" "));
        console.log(BinaryTree.preOrder(root).join(" "));
    }
}

export { Preorder };