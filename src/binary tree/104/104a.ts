/* 104a. maximum depth of binary tree */
// @: binary tree + bfs
import { TreeDepth } from "./run";
import { TreeNode } from "../binary tree";
import { Queue } from "datastructures-js";

class A extends TreeDepth {
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;

        const queue = new Queue<TreeNode>([root]);
        let [depth, levelLen] = [0, queue.size()];

        while (!queue.isEmpty()) {
            const curr: TreeNode = queue.dequeue()!;
            --levelLen;

            if (curr.left) queue.enqueue(curr.left);
            if (curr.right) queue.enqueue(curr.right);

            if (levelLen === 0) {
                ++depth;
                levelLen = queue.size();
            }
        }

        return depth;
    }
}

A.run(new A());