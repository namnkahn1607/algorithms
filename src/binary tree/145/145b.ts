/* 145b. binary tree postorder traversal */
// @: iterative dfs I
import { TreeNode } from "../binary tree";
import { Stack } from "datastructures-js";

class B {
    postorderTraversal(root: TreeNode | null): number[] {
        const ans: number[] = [];

        const stack = new Stack<TreeNode>();
        let lastVisit: TreeNode | null = null;
        let cur = root;

        while (!stack.isEmpty() || cur) {
            if (cur) {
                stack.push(cur);
                cur = cur.left;
            } else {
                const peek = stack.peek()!;

                if (peek.right && lastVisit !== peek.right) {
                    cur = peek.right;
                } else {
                    ans.push(peek.val);
                    lastVisit = stack.pop()!;
                }
            }
        }

        return ans;
    }
}

export { B };