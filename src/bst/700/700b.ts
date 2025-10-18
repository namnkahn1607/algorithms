/* 700b. search in a BST */
// @: bst + iterative dfs
import { searchBST } from "./run";
import { TreeNode } from "../BST";
import { Stack } from "datastructures-js";

class B extends searchBST {
    searchBST(root: TreeNode | null, val: number): TreeNode | null {
        const stack = new Stack<TreeNode | null>();
        let curr = root;

        while (!stack.isEmpty() || curr) {
            if (curr) {
                if (curr.val === val) {
                    return curr;
                }

                stack.push(curr.right);
                curr = curr.left;

            } else {
                curr = stack.pop();
            }
        }

        return null;
    }
}

B.run(new B());