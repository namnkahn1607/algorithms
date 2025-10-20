/* 543b. diameter of binary tree */
// @: binary tree + iterative dfs
import { DiameterTree } from "./run";
import { TreeNode } from "../binary tree";
import { Stack } from "datastructures-js";

class B extends DiameterTree {
    diameterOfBinaryTree(root: TreeNode | null): number {
        const stack = new Stack<TreeNode>();
        const heights = new Stack<number>();

        let curr: TreeNode | null = root;
        let lastVisit: TreeNode | null = null;

        let diameter = 0;

        while (!stack.isEmpty() || curr) {
            if (curr) {
                stack.push(curr);
                curr = curr.left;
            } else {
                const peek = stack.peek()!;

                if (peek.right && lastVisit !== peek.right) {
                    curr = peek.right;
                } else {
                    const right = (!peek.right) ? 0 : heights.pop()!;
                    const left = (!peek.left) ? 0 : heights.pop()!;

                    diameter = Math.max(diameter, left + right);
                    heights.push(1 + Math.max(left, right));

                    lastVisit = stack.pop()!;
                }
            }
        }

        return diameter;
    }
}

B.run(new B());