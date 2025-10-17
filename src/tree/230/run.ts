/* 230. k-th smallest integer in BST */

import {BinaryTree, TreeNode} from "../binary tree";

abstract class MinWithinBST {
    abstract kthSmallest(root: TreeNode | null, k: number): number;

    public static run(sol: MinWithinBST): void {
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [4, 3, 5, 2, null]
        );
        const k: number = 4;

        console.log(sol.kthSmallest(root, k));
    }
}

export { MinWithinBST };