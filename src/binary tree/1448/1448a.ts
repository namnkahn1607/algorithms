/* 1448a. count good nodes in binary tree */
// @: binary tree + recursive dfs
import { TreeNode } from "../binary tree";

class A {
    goodNodes(root: TreeNode | null): number {
        if (!root) return 0;

        let ans = 0;

        const isGood = (node: TreeNode | null, mx: number) => {
            if (!node) return;

            if (node.val >= mx) {
                ++ans;
                mx = Math.max(mx, node.val);
            }

            isGood(node.left, mx);
            isGood(node.right, mx);
        };

        isGood(root, root.val);

        return ans;
    }
}

export { A };