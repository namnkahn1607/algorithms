/* algorithms: Rooting a Tree from Graph */

class TreeNode {
    constructor(
        public id: number,
        public par: TreeNode | null = null,
        public children: Array<TreeNode> = []
    ) {}
}

type _Node = TreeNode | null;

class RootingTree {
    rootingTree(n: number, edges: number[][], rootId: number = 0): _Node {
        const adj = Array.from(
            { length: n }, () => new Array<number>()
        );

        for (const [src, dst] of edges) {
            adj[src].push(dst);
            adj[dst].push(src);
        }

        const buildTree = (curr: TreeNode, par: _Node): _Node => {
            for (const childId of adj[curr.id]) {
                if (par !== null && childId === par.id)
                    continue;

                const child = new TreeNode(childId, curr, []);
                curr.children.push(child);
                buildTree(child, curr);
            }

            return curr;
        }

        const root = new TreeNode(rootId, null);
        return buildTree(root, null);
    }
}

export { RootingTree };