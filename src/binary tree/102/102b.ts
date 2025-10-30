/* 102b. binary tree level order traversal */
// @: binary tree + dfs
import { TreeNode } from "../binary tree";

class B {
    levelOrder(root: TreeNode | null): number[][] {
        const ans: number[][] = [];

        const levelTraversal = (node: TreeNode | null, level: number): void => {
            if (!node) return;

            if (level === ans.length)
                ans.push([]);

            ans[level].push(node.val);

            levelTraversal(node.left, level + 1);
            levelTraversal(node.right, level + 1);
        };

        levelTraversal(root, 0);

        return ans;
    }
}

export { B };