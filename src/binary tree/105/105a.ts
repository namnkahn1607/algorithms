/* 105a. construct binary tree from preorder and inorder */
// @: binary tree + dfs
import { TreeNode } from "../binary tree";

class A {
    buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        const map = new Map<number, number>();

        for (let i = 0; i < preorder.length; ++i)
            map.set(inorder[i], i);

        let preIdx = 0;

        const createNode = (l: number, r: number): TreeNode | null => {
            if (l > r) return null;

            const rootVal = preorder[preIdx++];
            const root = new TreeNode(rootVal);

            const mid = map.get(rootVal)!;
            root.left = createNode(l, mid - 1);
            root.right = createNode(mid + 1, r);

            return root;
        };

        return createNode(0, inorder.length - 1);
    }
}

export { A };