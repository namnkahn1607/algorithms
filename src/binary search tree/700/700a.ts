/* 700a. search in a BST */
// @: bst + recursive dfs
import { TreeNode } from "../BST";

class A {
    searchBST(root: TreeNode | null, val: number): TreeNode | null {
        if (!root) return null;

        if (val < root.val)
            return this.searchBST(root.left, val);
        else if (val > root.val)
            return this.searchBST(root.right, val);

        return root;
    }
}

export { A };