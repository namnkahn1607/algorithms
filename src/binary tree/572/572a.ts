/* 572a. subtree of another tree */
// @: binary tree + dfs
import { TreeNode } from "../binary tree";

class A {
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!root) return false;

        const sameSubtree = (
            node1: TreeNode | null, node2: TreeNode | null
        ): boolean => {
            if (!node1 && !node2)
                return true;

            if (!node1 || !node2 || node1.val !== node2.val)
                return false;

            return sameSubtree(node1.left, node2.left)
                && sameSubtree(node1.right, node2.right);
        };

        if (sameSubtree(root, subRoot))
            return true;

        return this.isSubtree(root.left, subRoot)
            || this.isSubtree(root.right, subRoot);
    }
}

export { A };