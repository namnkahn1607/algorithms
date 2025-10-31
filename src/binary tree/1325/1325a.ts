/* 1325a. delete leaves with a given value */
// @: binary tree + recursive dfs
import { TreeNode } from "../binary tree";

class A {
    removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
        if (!root) return null;

        root.left = this.removeLeafNodes(root.left, target);
        root.right = this.removeLeafNodes(root.right, target);

        if (!root.left && !root.right && root.val === target)
            return null;

        return root;
    }
}

export { A };