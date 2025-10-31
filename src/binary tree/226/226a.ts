/* 226a. invert binary tree */
// @: binary tree + bfs
import { TreeNode } from "../binary tree";
import { Queue } from "datastructures-js";

class A {
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

export { A };