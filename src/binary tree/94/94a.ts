/* 94a. binary tree inorder traversal */
// @: iterative dfs
import { TreeNode } from "../binary tree";
import { Stack } from "datastructures-js";

class A {
    inorderTraversal(root: TreeNode | null): number[] {
        const ans: number[] = [];
        const stack = new Stack<TreeNode>();

        let curr = root;

        while (!stack.isEmpty() || curr) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop()!;
            ans.push(curr.val);
            curr = curr.right;
        }

        return ans;
    }
}

export { A };