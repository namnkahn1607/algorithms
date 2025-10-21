/* 572. subtree of another tree */
// # linked problem: 100
import { BinaryTree, TreeNode } from "../binary tree";

abstract class Subtree {
    abstract isSubtree(
        root: TreeNode | null, subRoot: TreeNode | null
    ): boolean;

    public static run(sol: Subtree): void {
        const root: TreeNode | null = BinaryTree.create(
            [
                1, null, 1, null, 1, null, 1, null, 1, null, 1, null, 1, null,
                1, null, 1, null, 1, null, 1, 2
            ]
        )

        const subRoot = BinaryTree.create(
            [1, null, 1, null, 1, null, 1, null, 1, null, 1, 2]
        );

        console.log(sol.isSubtree(root, subRoot));
    }
}

export { Subtree };