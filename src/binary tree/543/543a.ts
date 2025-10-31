/* 543a. diameter of binary tree */
// @: binary tree + recursive dfs
import { TreeNode } from "../binary tree";

class A {
    diameterOfBinaryTree(root: TreeNode | null): number {
        let diameter = 0;

        const maxHeight = (node: TreeNode | null): number => {
            if (!node) return 0;

            const left = maxHeight(node.left);
            const right = maxHeight(node.right);

            diameter = Math.max(diameter, left + right);

            return 1 + Math.max(left, right);
        };

        maxHeight(root);

        return diameter;
    }
}

export { A };