/* 872. leaf similar tree */

import {BinaryTree, TreeNode} from "../binary tree";

abstract class SimilarLeaves {
    abstract leafSimilar(
        root1: TreeNode | null, root2: TreeNode | null
    ): boolean;

    public static run(sol: SimilarLeaves): void {
        const root1: TreeNode | null = BinaryTree.create(
            [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]
        );

        const root2: TreeNode | null = BinaryTree.create(
            [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]
        );

        console.log(sol.leafSimilar(root1, root2));
    }
}

export { SimilarLeaves };