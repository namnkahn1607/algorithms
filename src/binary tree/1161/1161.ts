/* 1161. maximum level sum of a binary tree */
// @: binary tree + bfs
import { MaxLevelSum } from "./run";
import { TreeNode } from "../binary tree";
import { Queue } from "datastructures-js";

class A extends MaxLevelSum {
    maxLevelSum(root: TreeNode | null): number {
        if (!root) return -1;

        const queue = new Queue<TreeNode>([root]);
        let curLevel = 0;
        let maxSum = Number.MIN_SAFE_INTEGER;
        let resLevel = -1;

        while (!queue.isEmpty()) {
            ++curLevel;

            const levelLen = queue.size();
            let curSum = 0;

            for (let i = 0; i < levelLen; ++i) {
                const curr: TreeNode = queue.pop()!;

                curSum += curr.val;

                if (curr.left) queue.enqueue(curr.left);
                if (curr.right) queue.enqueue(curr.right);
            }

            if (curSum > maxSum) {
                maxSum = curSum;
                resLevel = curLevel;
            }
        }

        return resLevel;
    }
}

A.run(new A());