/* 102. binary tree level order traversal */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class LevelOrder {
    abstract levelOrder(root: TreeNode | null): number[][];

    public static run(sol: LevelOrder): void {
        const root: TreeNode | null = BinaryTree.create(
            [3, 9, 20, null, null, 15, 7]
        );

        console.log(sol.levelOrder(root).map(
            val => val.join(",")
        ).join("\n"));

        console.log(BinaryTree.levelOrder(root).join(" "));
    }
}

export { LevelOrder };