/* 700a. search in a BST */
// @: bst + recursive dfs
import { searchBST } from "./run";
import { TreeNode } from "../BST";

class A extends searchBST {
    searchBST(root: TreeNode | null, val: number): TreeNode | null {
        if (!root) return null;

        if (val < root.val)
            return this.searchBST(root.left, val);
        else if (val > root.val)
            return this.searchBST(root.right, val);

        return root;
    }
}

A.run(new A());