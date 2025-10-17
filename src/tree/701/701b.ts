/* 701b. insert into BST */
// @: bst + iterative dfs
import { insertBST } from "./run";
import { TreeNode } from "../binary tree";

class B extends insertBST {
    insertIntoBST(root: TreeNode | null, x: number): TreeNode | null {
        let prev: TreeNode | null = null;
        let curr = root;

        while (curr) {
            prev = curr;

            if (x > curr.val) {
                curr = curr.right;
            } else {
                curr = curr.left;
            }
        }

        const newNode = new TreeNode(x);

        if (!prev)
            return newNode;

        if (x < prev.val) {
            prev.left = newNode;
        } else {
            prev.right = newNode;
        }

        return root;
    }
}

B.run(new B());