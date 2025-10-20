/* 543. diameter of binary tree */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class DiameterTree {
    abstract diameterOfBinaryTree(root: TreeNode | null): number;

    public static run(sol: DiameterTree): void {
        const root: TreeNode | null = BinaryTree.create(
            [2, null, 4]
        );

        console.log(sol.diameterOfBinaryTree(root));
    }
}

export { DiameterTree };