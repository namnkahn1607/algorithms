/* 872. leaf similar tree */
// @: binary tree + dfs
import { SimilarLeaves } from "./run";
import { TreeNode } from "../binary tree";

class A extends SimilarLeaves {
    leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
        const [leaves1, leaves2] = [[], []];

        const collect = (root: TreeNode | null, leaves: number[]) => {
            if (!root) return;

            collect(root.left, leaves);
            collect(root.right, leaves);

            if (!root.left && ! root.right)
                leaves.push(root.val);
        };

        collect(root1, leaves1);
        collect(root2, leaves2);

        return leaves1.join(".") === leaves2.join(".");
    }
}

A.run(new A());