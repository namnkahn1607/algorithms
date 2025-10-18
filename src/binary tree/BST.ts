/* data structures: Binary Search Tree */

import { BinaryTree, TreeNode } from "./binary tree";

class BST extends BinaryTree {
    public static search(root: TreeNode | null, target: number): TreeNode | null {
        if (!root) return null;

        if (root.val > target)
            return this.search(root.left, target);
        else if (root.val < target)
            return this.search(root.right, target);

        return root;
    }
}

export { BST };