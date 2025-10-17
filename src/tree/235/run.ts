/* 235. lowest common ancestor of BST */

import { BinaryTree, TreeNode } from "../binary tree";
import { BST } from "../BST";

abstract class LCAofBST {
    abstract lowestCommonAncestor(
        root: TreeNode | null, p: TreeNode | null, q: TreeNode | null
    ): TreeNode | null;

    public static run(sol: LCAofBST): void {
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]
        );

        const p: TreeNode | null = BST.search(root, 2);
        const q: TreeNode | null = BST.search(root, 8);

        console.log(sol.lowestCommonAncestor(root, p, q));
    }
}

export { LCAofBST };