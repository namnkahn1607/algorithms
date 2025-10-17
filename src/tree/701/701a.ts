/* 701a. insert into BST */
// @: bst + recursive dfs
import { insertBST } from "./run";
import { TreeNode } from "../binary tree";

class A extends insertBST {
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

A.run(new A());