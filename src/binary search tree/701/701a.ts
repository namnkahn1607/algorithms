/* 701a. insert into BST */
// @: bst + recursive dfs
import { TreeNode } from "../BST";

class A {
    insertIntoBST(root: TreeNode | null, x: number): TreeNode | null {
        if (!root) {
            return new TreeNode(x);
        }

        if (x < root.val) {
            root.left = this.insertIntoBST(root.left, x);
        } else {
            root.right = this.insertIntoBST(root.right, x);
        }

        return root;
    }
}

export { A };