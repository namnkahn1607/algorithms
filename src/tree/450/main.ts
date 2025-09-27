/* 450. delete node in a BST */

import { BinaryTree, TreeNode } from "../binary tree";

abstract class DelNode {
    abstract deleteNode(root: TreeNode | null, key: number): TreeNode | null;

    public static run(sol: DelNode): void {
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [5, 3, 6, 2, 4, null, null, 7]
        );

        const key: number = 3;

        console.log(BinaryTree.convertToArray(
            sol.deleteNode(root, key)
        ).map(val => val === null ? "null" : val).join(" "));
    }
}

export { DelNode };