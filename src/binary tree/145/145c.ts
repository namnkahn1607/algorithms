/* 145c. binary tree postorder traversal */
// @: iterative dfs II
import { TreeNode } from "../binary tree";
import { Stack } from "datastructures-js";

class C {
    postorderTraversal(root: TreeNode | null): number[] {
        const ans: number[] = [];

        const stack = new Stack<TreeNode | null>([root]);
        const visit: boolean[] = [false];

        while (!stack.isEmpty()) {
            const cur = stack.pop();
            const v = visit.pop()!;

            if (cur) {
                if (v) {
                    ans.push(cur.val);
                } else {
                    stack.push(cur);
                    visit.push(true);

                    stack.push(cur.right);
                    visit.push(false);

                    stack.push(cur.left);
                    visit.push(false);
                }
            }
        }

        return ans;
    }
}

export { C };