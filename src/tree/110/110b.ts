/* 110b. balanced binary tree */
// @: binary tree + dfs
import { BalancedTree } from "./main";
import { TreeNode } from "../binary tree";
import { Stack } from "datastructures-js";

class B extends BalancedTree {
    isBalanced(root: TreeNode | null): boolean {
        const stack = new Stack<TreeNode>();
        let [curr, lastVisit]: [TreeNode | null, TreeNode | null] = [root, null];

        const balanced: number[] = [];

        while (!stack.isEmpty() || curr) {
            if (curr) {
                stack.push(curr);
                curr = curr.left;
            } else {
                const peek = stack.peek()!;

                if (peek.right && lastVisit !== peek.right) {
                    curr = peek.right;
                } else {
                    const right = (!peek.right) ? 0 : balanced.pop()!;
                    const left = (!peek.left) ? 0 : balanced.pop()!;

                    if (Math.abs(left - right) > 1)
                        return false;
                    else
                        balanced.push(1 + Math.max(left, right));

                    lastVisit = stack.pop()!;
                }
            }
        }

        return true;
    }
}

B.run(new B());