/* 98. validate binary search tree */
// @: bst + dfs
import { ValidateBST } from "./run";
import { TreeNode } from "../BST";

class A extends ValidateBST {
    isValidBST(root: TreeNode | null): boolean {
        const validNode = (
            node: TreeNode | null, L: number, R: number
        ): boolean => {
            if (!node)
                return true;

            const val = node.val;

            if (!(L < val && val < R))
                return false;

            return validNode(node.left, L, val)
                && validNode(node.right, val, R);
        };

        return validNode(
            root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER
        );
    }
}

A.run(new A());