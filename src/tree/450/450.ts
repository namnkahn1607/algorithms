/* 450. delete node in a BST */
// @: bst + dfs
import { DelNode } from "./main";
import { TreeNode } from "../binary tree";

class A extends DelNode {
    deleteNode(root: TreeNode | null, key: number): TreeNode | null {
        if (!root) return null;

        if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
            return root;

        } else if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
            return root;
        }

        if (!root.right)
            return root.left;

        let curr: TreeNode = root.right;

        while (curr.left)
            curr = curr.left;

        curr.left = root.left;

        return root.right;
    }
}

A.run(new A());