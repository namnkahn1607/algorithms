/* 226b. invert binary tree */
// @: binary tree + recursive dfs
import { TreeNode } from "../binary tree";

class B {
    invertTree(root: TreeNode | null): TreeNode | null {
        if (!root) return null;

        [root.left, root.right] = [root.right, root.left];
        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}

export { B };