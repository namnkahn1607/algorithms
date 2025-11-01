/* 450a. delete node in a BST */
// @: bst + dfs
import { TreeNode } from "../BST";

class A {
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

export { A };