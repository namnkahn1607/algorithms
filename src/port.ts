/* port from Data Structures: Binary Tree */
export class TreeNode {
    constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

export class BinaryTree {
    public static createBinaryTree(arr: (number | null)[]): TreeNode | null {
        if (arr === null || arr.length === 0 || arr[0] === null)
            return null;

        const root: TreeNode = new TreeNode(arr[0]);

        const queue: TreeNode[] = [root];
        let i = 0, j = 1;

        while (i < queue.length && j < arr.length) {
            const cur: TreeNode = queue[i++];

            if (arr[j] !== null) {
                cur.left = new TreeNode(arr[j]!);
                queue.push(cur.left);
            }

            ++j;

            if (j < arr.length && arr[j] !== null) {
                cur.right = new TreeNode(arr[j]!);
                queue.push(cur.right);
            }

            ++j;
        }

        return root;
    }
}