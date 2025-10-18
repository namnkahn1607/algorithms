/* 701. insert into BST */

import { BST, TreeNode } from "../BST";

abstract class InsertBST {
    abstract insertIntoBST(root: TreeNode | null, x: number): TreeNode | null;

    public static run(sol: InsertBST): void {
        const root: TreeNode | null = BST.create(
            [5, 3, 6, null, 4, null, 10, null, null, 7]
        );

        const x: number = 2;

        console.log(BST.toArray(sol.insertIntoBST(root, x)).map(
            val => val === null ? "null" : val
        ).join(" "));
    }
}

export { InsertBST };