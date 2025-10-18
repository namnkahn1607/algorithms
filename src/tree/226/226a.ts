/* 226a. invert binary tree */
// @: binary tree + bfs
import { Inversion } from "./run";
import { TreeNode } from "../binary tree";
import { Queue } from "datastructures-js";

class A extends Inversion {
    invertTree(root: TreeNode | null): TreeNode | null {
        const queue = new Queue<TreeNode | null>([root]);

        while (!queue.isEmpty()) {
            const curr = queue.pop();

            if (curr) {
                [curr.left, curr.right] = [curr.right, curr.left];
                queue.push(curr.left);
                queue.push(curr.right);
            }
        }

        return root;
    }
}

A.run(new A());