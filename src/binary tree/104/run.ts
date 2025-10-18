/* 104. maximum depth of binary tree */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class TreeDepth {
    abstract maxDepth(root: TreeNode | null): number;

    public static run(sol: TreeDepth): void {
        const root: TreeNode | null = BinaryTree.create(
            [1, 2, 3, null, null, 4]
        );

        console.log(sol.maxDepth(root));
    }
}

export { TreeDepth };