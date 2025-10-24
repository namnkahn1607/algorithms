/* 1448b. count good nodes in binary tree */
// @: binary tree + iterative dfs
import { BinaryTree, TreeNode } from "../binary tree";
import { Stack } from "datastructures-js";

class B {
    goodNodes(root: TreeNode | null): number {
        if (!root) return 0;

        const stack = new Stack<[TreeNode | null, number]>();
        let curr: [TreeNode | null, number] = [root, root.val];
        let ans = 0;

        while (!stack.isEmpty() || curr[0]) {
            if (curr[0]) {
                if (curr[0].val >= curr[1])
                    ++ans;

                curr[1] = Math.max(curr[0].val, curr[1]);
                stack.push([curr[0].right, curr[1]]);
                curr[0] = curr[0].left;

            } else {
                curr = stack.pop()!;
            }
        }

        return ans;
    }
}

export { B };