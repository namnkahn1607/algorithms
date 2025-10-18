/* 226c. invert binary tree */
// @: binary tree + iterative dfs
import { Inversion } from "./run";
import { TreeNode } from "../binary tree";
import { Stack } from "datastructures-js";

class C extends Inversion {
    invertTree(root: TreeNode | null): TreeNode | null {
        const stack = new Stack<TreeNode | null>();
        let curr = root;

        while (!stack.isEmpty || curr) {
            if (curr) {
                [curr.left, curr.right] = [curr.right, curr.left];
                stack.push(curr.left);
                curr = curr.right;
            } else {
                curr = stack.pop();
            }
        }

        return root;
    }
}

C.run(new C());