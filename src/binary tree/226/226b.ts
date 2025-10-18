/* 226b. invert binary tree */
// @: binary tree + recursive dfs
import { Inversion } from "./run";
import { TreeNode } from "../binary tree";

class B extends Inversion {
    invertTree(root: TreeNode | null): TreeNode | null {
        if (!root) return null;

        [root.left, root.right] = [root.right, root.left];
        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}

B.run(new B());