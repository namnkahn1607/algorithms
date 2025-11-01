/* 230a. k-th smallest integer in BST */
// @: bst + iterative dfs
import { TreeNode } from "../BST";
import { Stack } from "datastructures-js";

class A {
    kthSmallest(root: TreeNode | null, k: number): number {
        const stack = new Stack<TreeNode>();
        let curr = root;

        let [currMin, idx] = [-1, 0];

        while (!stack.isEmpty() || curr) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop()!;
            currMin = curr.val;
            ++idx;

            if (idx === k)
                break;

            curr = curr.right;
        }

        return currMin;
    }
}

export { A };