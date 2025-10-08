/* 102a. binary tree level order traversal */
// @: binary tree + bfs
import { LevelOrder } from "./main";
import { TreeNode } from "../binary tree";
import { Queue } from "datastructures-js";

class A extends LevelOrder {
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];

        const ans: number[][] = [];
        let level: number[] = [];

        const queue = new Queue<TreeNode>([root]);
        let levelLen = queue.size();

        while (!queue.isEmpty()) {
            const curr = queue.dequeue()!;
            level.push(curr.val);
            --levelLen;

            if (curr.left) queue.enqueue(curr.left);
            if (curr.right) queue.enqueue(curr.right);

            if (levelLen === 0) {
                ans.push(level);
                level = [];
                levelLen = queue.size();
            }
        }

        return ans;
    }
}

A.run(new A());