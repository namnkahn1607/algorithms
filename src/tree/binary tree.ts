/* data structures: Binary Tree */

import { Queue } from "datastructures-js";

export class TreeNode {
    constructor(
        public val: number = 0,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null
    ) {}
}

export class BinaryTree {
    public static createBinaryTree(arr: (number | null)[]): TreeNode | null {
        if (!arr?.length || typeof arr[0] !== "number")
            return null;

        const root = new TreeNode(arr[0]);
        const queue = new Queue<TreeNode>([root]);
        let i = 1;

        while (!queue.isEmpty() && i < arr.length) {
            const curr = queue.dequeue()!;

            if (arr[i] !== null) {
                curr.left = new TreeNode(arr[i]!);
                queue.push(curr.left);
            }

            ++i;

            if (i < arr.length && arr[i] !== null) {
                curr.right = new TreeNode(arr[i]!);
                queue.push(curr.right);
            }

            ++i;
        }

        return root;
    }

    public static convertToArray(root: TreeNode | null): (number | null)[] {
        if (!root) return [];

        const ans: (number | null)[] = [];
        const queue = new Queue<TreeNode | null>([root]);

        while (!queue.isEmpty()) {
            const curr = queue.dequeue();

            if (curr) {
                ans.push(curr.val);
                queue.push(curr.left);
                queue.push(curr.right);
            } else {
                ans.push(null);
            }
        }

        while (ans.length > 0 && ans[ans.length - 1] === null)
            ans.pop();

        return ans;
    }

    public static searchNode(root: TreeNode | null, target: number): TreeNode | null {
        const stack: (TreeNode | null)[] = [];
        let curr: TreeNode | null = root;

        while (stack.length > 0 || curr) {
            if (curr) {
                if (curr.val === target)
                    return curr;

                stack.push(curr.right);
                curr = curr.left;

            } else {
                curr = stack.pop()!;
            }
        }

        return null;
    }

    public static preOrder(root: TreeNode | null): number[] {
        const ans: number[] = [];

        const dfs = (node: TreeNode | null): void => {
            if (!node) return;

            ans.push(node.val);
            dfs(node.left);
            dfs(node.right);
        };

        dfs(root);

        return ans;
    }

    public static inOrder(root: TreeNode | null): number[] {
        const ans: number[] = [];

        const dfs = (node: TreeNode | null): void => {
            if (!node) return;

            dfs(node.left);
            ans.push(node.val);
            dfs(node.right);
        };

        dfs(root);

        return ans;
    }

    public static postOrder(root: TreeNode | null): number[] {
        const ans: number[] = [];

        const dfs = (node: TreeNode | null): void => {
            if (!node) return;

            dfs(node.left);
            dfs(node.right);
            ans.push(node.val);
        };

        dfs(root);

        return ans;
    }

    public static levelOrder(root: TreeNode | null): number[] {
        if (!root) return [];

        const ans: number[] = [];
        const queue = new Queue<TreeNode>([root]);

        while (!queue.isEmpty()) {
            const levelLen = queue.size();

            for (let i = 0; i < levelLen; ++i) {
                const curr: TreeNode = queue.pop()!;

                ans.push(curr.val);

                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
        }

        return ans;
    }
}