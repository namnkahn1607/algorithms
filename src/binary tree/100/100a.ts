/* 100a. same binary tree */
// @: binary tree + dfs
import { SameTree } from "./run";
import { TreeNode } from "../binary tree";

class A extends SameTree {
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (!p && !q)
            return true;
        else if (!p || !q || p.val !== q.val)
            return false;

        return this.isSameTree(p.left, q.left)
            && this.isSameTree(p.right, q.right);
    }
}

A.run(new A());