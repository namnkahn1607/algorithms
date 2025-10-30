/* 144a. binary tree preorder traversal */
// @: binary tree + dfs
import { TreeNode } from "../binary tree";
import { Stack } from "datastructures-js";

class A {
    preorderTraversal(root: TreeNode | null): number[] {
        const ans: number[] = [];

        const stack = new Stack<TreeNode | null>();
        let cur = root;

        while (!stack.isEmpty() || cur) {
            if (cur) {
                ans.push(cur.val);
                stack.push(cur.right);
                cur = cur.left;
            } else {
                cur = stack.pop();
            }
        }

        return ans;
    }
}

export { A };