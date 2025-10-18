/* 235b. lowest common ancestor of BST */
// @: bst + iterative dfs
import { LCAofBST } from "./run";
import { TreeNode } from "../BST";

class B extends LCAofBST {
    lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
        if (!root || !p || !q)
            return null;

        const a = Math.min(p.val, q.val);
        const b = Math.max(p.val, q.val);
        let curr: TreeNode = root;

        while (true) {
            if (curr.val < a)
                curr = curr.right!;
            else if (curr.val > b)
                curr = curr.left!;
            else
                break;
        }

        return curr;
    }
}

B.run(new B());