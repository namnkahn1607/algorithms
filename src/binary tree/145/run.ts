/* 145. binary tree postorder traversal */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class Postorder {
    abstract postorderTraversal(root: TreeNode | null): number[];

    public static run(sol: Postorder): void {
        const root: TreeNode | null = BinaryTree.create(
            [1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, null, null, null, 10]
        );

        console.log(sol.postorderTraversal(root).join(" "));
        console.log(BinaryTree.postOrder(root).join(" "));
    }
}

export { Postorder };