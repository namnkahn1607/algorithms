/* 701b. insert into BST */
// @: bst + iterative dfs
import { InsertBST } from "./run";
import { TreeNode } from "../BST";

class B extends InsertBST {
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