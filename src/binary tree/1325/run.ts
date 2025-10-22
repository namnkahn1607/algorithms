/* 1325. delete leaves with a given value */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class LeavesRemoval {
    abstract removeLeafNodes(
        root: TreeNode | null, target: number
    ): TreeNode | null;

    public static run(sol: LeavesRemoval): void {
        const root: TreeNode | null = BinaryTree.create(
            [1, 2, 3, null, 2, 2, 5]
        );

        const target: number = 2;

        console.log(BinaryTree.toArray(
            sol.removeLeafNodes(root, target)).map(val => {
                return val === null ? "null" : val;
        }).join(" "));
    }
}

export { LeavesRemoval };