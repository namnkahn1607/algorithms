/* 145. binary tree postorder traversal */
// @: invert binary tree + reverse output
import { Postorder } from "./run";
import { TreeNode } from "../binary tree";
import { Stack } from "datastructures-js";

class A extends Postorder {
    postorderTraversal(root: TreeNode | null): number[] {
        const ans: number[] = [];

        const stack = new Stack<TreeNode | null>();
        let cur = root;

        while (!stack.isEmpty() || cur) {
            if (cur) {
                ans.push(cur.val);
                stack.push(cur.left);
                cur = cur.right;
            } else {
                cur = stack.pop();
            }
        }

        return ans.reverse();
    }
}

A.run(new A());