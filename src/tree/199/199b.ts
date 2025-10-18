/* 199b. binary tree right side view */
// @: binary tree + recursive dfs
import { RightView } from "./run";
import { TreeNode } from "../binary tree";

class B extends RightView {
    rightSideView(root: TreeNode | null): number[] {
        const ans: number[] = [];

        const dfs = (node: TreeNode | null, depth: number) => {
            if (!node) return;

            if (depth === ans.length)
                ans.push(node.val);

            dfs(node.right, depth + 1);
            dfs(node.left, depth + 1);
        };

        dfs(root, 0);

        return ans;
    }
}

B.run(new B());