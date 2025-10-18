/* 226. invert binary tree */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class Inversion {
    abstract invertTree(root: TreeNode | null): TreeNode | null;

    public static run(sol: Inversion): void {
        const root: TreeNode | null = BinaryTree.create(
            [1, 2, 3, 4, 5, 6, 7]
        );

        console.log(BinaryTree.toArray(
            sol.invertTree(root)
        ).join(" "));
    }
}

export { Inversion };