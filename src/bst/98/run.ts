/* 98. validate binary search tree */
// @: bst + recursive dfs
import { BST, TreeNode } from "../BST";

abstract class ValidateBST {
    abstract isValidBST(root: TreeNode | null): boolean;

    public static run(sol: ValidateBST): void {
        const root: TreeNode | null = BST.create(
            [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]
        );

        console.log(sol.isValidBST(root));
    }
}

export { ValidateBST };