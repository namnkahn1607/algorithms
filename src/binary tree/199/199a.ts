/* 199a. binary tree right side view */
// @: binary tree + bfs
import { RightView } from "./run";
import { TreeNode } from "../binary tree";
import { Deque } from "datastructures-js";

class A extends RightView {
    rightSideView(root: TreeNode | null): number[] {
        if (!root) return [];

        const ans: number[] = [];
        const deque = new Deque<TreeNode>([root]);

        while (!deque.isEmpty()) {
            const levelLen = deque.size();
            ans.push(deque.back()!.val);

            for (let i = 0; i < levelLen; ++i) {
                const curr: TreeNode = deque.popFront()!;

                if (curr.left) deque.pushBack(curr.left);
                if (curr.right) deque.pushBack(curr.right);
            }
        }

        return ans;
    }
}

A.run(new A());