/* 701b. insert into BST */
// @: bst + iterative dfs
import { TreeNode } from "../BST";

class B {
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

export { B };