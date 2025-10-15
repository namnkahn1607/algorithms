/* 104b. maximum depth of binary tree */
// @: binary tree + divide and conquer
import { TreeDepth } from "./run";
import { TreeNode } from "../binary tree";

class B extends TreeDepth {
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;

        return 1 + Math.max(
            this.maxDepth(root.left),
            this.maxDepth(root.right)
        );
    }
}

B.run(new B());