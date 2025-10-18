/* 100. same binary tree */

import { BinaryTree, TreeNode } from "../binary tree";
import _ from "lodash";

abstract class SameTree {
    abstract isSameTree(p: TreeNode | null, q: TreeNode | null): boolean;

    public static run(sol: SameTree): void {
        const p: TreeNode | null = BinaryTree.create([1, 2, 1]);
        const q: TreeNode | null = BinaryTree.create([1, 1, 2]);

        console.log(sol.isSameTree(p, q));
        console.log(_.isEqual(BinaryTree.toArray(p), BinaryTree.toArray(q)));
    }
}

export { SameTree };