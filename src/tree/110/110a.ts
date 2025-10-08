/* 110a. balanced binary tree */
// @: binary tree + dfs
import { BalancedTree } from "./main";
import { TreeNode } from "../binary tree";

class A extends BalancedTree {
    isBalanced(root: TreeNode | null): boolean {
        const balancedNode = (node: TreeNode | null): number => {
            if (!node) return 0;

            const left = balancedNode(node.left);

            if (left === -1) return -1;

            const right = balancedNode(node.right);

            if (right === -1) return -1;

            if (Math.abs(left - right) > 1)
                return -1;

            return 1 + Math.max(left, right);
        };

        return balancedNode(root) !== -1;
    }
}

A.run(new A());