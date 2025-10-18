/* 230. k-th smallest integer in BST */

import { BST, TreeNode } from "../BST";

abstract class MinWithinBST {
    abstract kthSmallest(root: TreeNode | null, k: number): number;

    public static run(sol: MinWithinBST): void {
        const root: TreeNode | null = BST.create(
            [4, 3, 5, 2, null]
        );
        const k: number = 4;

        console.log(sol.kthSmallest(root, k));
    }
}

export { MinWithinBST };