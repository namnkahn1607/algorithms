/* 230b. k-th smallest integer in BST */
// @: bst + recursive dfs
import { TreeNode } from "../BST";

class B {
    kthSmallest(root: TreeNode | null, k: number): number {
        const ans: number[] = [k, 0];

        const dfs = (node: TreeNode | null) => {
            if (!node)
                return;

            dfs(node.left);

            --ans[0];

            if (ans[0] === 0) {
                ans[1] = node.val;
                return;
            }

            dfs(node.right);
        };

        dfs(root);

        return ans[1];
    }
}

export { B };