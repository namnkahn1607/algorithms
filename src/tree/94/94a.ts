/* 94a. binary tree inorder traversal */
// @: binary tree + dfs
import { Inorder } from "./main";
import { TreeNode } from "../binary tree";
import { Stack } from "datastructures-js";

class A extends Inorder {
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

A.run(new A());