/* data structures: Binary Search Tree */

import { BinaryTree, TreeNode } from "../binary tree/binary tree";

class BST extends BinaryTree {
    public static create(arr: (number | null)[]): TreeNode | null {
        if (!arr?.length || typeof arr[0] !== "number")
            return null;

        const insertBST = (node: TreeNode | null, val: number): TreeNode | null => {
            if (!node)
                return new TreeNode(val);

            if (val === node.val)
                throw new Error("value in BST must be distinct");

            if (val < node.val) {
                node.left = insertBST(node.left, val);
            } else {
                node.right = insertBST(node.right, val);
            }

            return node;
        };

        let root: TreeNode | null = null;
        let isRoot = true;

        for (const val of arr) {
            if (val != null) {
                if (isRoot) {
                    root = insertBST(root, val);
                    isRoot = false;
                    continue;
                }

                insertBST(root, val);
            }
        }

        return root;
    }

    public static search(root: TreeNode | null, target: number): TreeNode | null {
        if (!root) return null;

        if (root.val > target)
            return this.search(root.left, target);
        else if (root.val < target)
            return this.search(root.right, target);

        return root;
    }
}

export { BST, TreeNode };