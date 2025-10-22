/* 1161. maximum level sum of a binary tree */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class MaxLevelSum {
    abstract maxLevelSum(root: TreeNode | null): number;

    public static run(sol: MaxLevelSum): void {
        const root: TreeNode | null = BinaryTree.create(
            [989, null, 10250, 98693, -89388, null, null, null, -32127]
        );

        console.log(sol.maxLevelSum(root));
    }
}

export { MaxLevelSum };