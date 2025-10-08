/* 102b. binary tree level order traversal */
// @: binary tree + dfs
import { LevelOrder } from "./main";
import { TreeNode } from "../binary tree";

class B extends LevelOrder {
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

B.run(new B());