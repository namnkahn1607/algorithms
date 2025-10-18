/* 199. binary tree right side view */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class RightView {
    abstract rightSideView(root: TreeNode | null): number[];

    public static run(sol: RightView): void {
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7, null, 8]
        );

        console.log(sol.rightSideView(root).join(" "));
    }
}

export { RightView };