/* 700. search in a BST */

import { BST, TreeNode } from "../BST";

abstract class searchBST {
    abstract searchBST(root: TreeNode | null, val: number): TreeNode | null;

    public static run(sol: searchBST): void {
        const root: TreeNode | null = BST.create(
            [4, 2, 7, 1, 3]
        );
        const val: number = 2;

        console.log(BST.levelOrder(sol.searchBST(root, val)).join(" "));
    }
}

export { searchBST };