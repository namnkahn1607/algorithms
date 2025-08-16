/* algorithms: Backtracking */
import { BinaryTree, TreeNode } from "../port";

class Backtrack {
    hasPath(root: TreeNode | null): boolean {
        if (!root || root.val === 0)
            return false;

        if (!root.left && !root.right)
            return true;

        if (this.hasPath(root.left))
            return true;

        return this.hasPath(root.right);
    }

    revealPath(root: TreeNode | null, path: number[]): boolean {
        if (!root || root.val === 0)
            return false;

        path.push(root.val);

        if (!root.left && !root.right)
            return true;

        if (this.revealPath(root.left, path))
            return true;

        if (this.revealPath(root.right, path))
            return true;

        path.pop();

        return false;
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [4, 0, 1, null, 7, 2, 0, null, null, 3]
        );

        const solution = new Backtrack();

        // determine if a non-zero root to leaf path exists in tree
        let ans1: boolean = solution.hasPath(root);
        console.log((ans1) ? "true" : "false");

        // look for a non-zero path in tree
        let ans2: number[] = [];
        solution.revealPath(root, ans2);
        console.log(ans2.join(" "));
    }
}

Backtrack.main();