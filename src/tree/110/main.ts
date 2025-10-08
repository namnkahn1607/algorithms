/* 110. balanced binary tree */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class BalancedTree {
    abstract isBalanced(root: TreeNode | null): boolean;

    public static run(sol: BalancedTree): void {
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [3, 9, 20, null, null, 15, 7]
        );

        console.log(sol.isBalanced(root));
    }
}

export { BalancedTree };