/* 1325b. delete leaves with a given value */
// @: binary tree + iterative dfs
import { TreeNode } from "../binary tree";
import { Stack } from "datastructures-js";

class B {
    removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
        const stack = new Stack<TreeNode>();
        let curr: TreeNode | null = root;
        let lastVisit: TreeNode | null = null;

        while (!stack.isEmpty() || curr) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.peek()!;

            if (curr.right && lastVisit !== curr.right) {
                curr = curr.right;
                continue;
            }

            stack.pop();

            if (!curr.left && !curr.right && curr.val === target) {
                if (stack.isEmpty())
                    return null;

                const parentNode = stack.peek()!;

                if (curr === parentNode.left) {
                    parentNode.left = null;
                } else {
                    parentNode.right = null;
                }

            } else {
                lastVisit = curr;
            }

            curr = null;
        }

        return root;
    }
}

export { B };