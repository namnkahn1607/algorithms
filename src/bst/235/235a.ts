/* 235a. lowest common ancestor of BST */
// @: bst + recursive dfs
import { TreeNode } from "../BST";

class A {
    lowestCommonAncestor(
        root: TreeNode | null, p: TreeNode | null, q: TreeNode | null
    ): TreeNode | null {
        if (!root || !p || !q)
            return null;

        if (root.val < Math.min(p.val, q.val))
            return this.lowestCommonAncestor(root.right, p, q);
        else if (root.val > Math.max(p.val, q.val))
            return this.lowestCommonAncestor(root.left, p, q);

        return root;
    }
}

export { A };