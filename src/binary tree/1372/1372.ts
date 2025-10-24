/* 1372. longest zigzag path in binary tree */
// @: binary tree + dfs + dp
import { TreeNode } from "../binary tree";

class A {
    longestZigZag(root: TreeNode | null): number {
        let ans = 0;

        const dfs = (node: TreeNode | null, nextDir: boolean): number => {
            if (!node) return 0;

            const left = dfs(node.left, true);
            const right = dfs(node.right, false);

            ans = Math.max(ans, left, right);

            return 1 + ((nextDir) ? right : left);
        };

        dfs(root, false);
        dfs(root, true);

        return ans;
    }
}

export { A };