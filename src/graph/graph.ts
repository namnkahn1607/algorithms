/* data structures: Graph */

import { Queue } from "datastructures-js";

export class _Node {
    constructor(
        public val: number = 0,
        public neighbors: _Node[] = []
    ) {}
}

export class Graph {
    public static createGraph(adjList: number[][]): _Node | null {
        const N: number = adjList.length;

        if (N === 0)
            return null;

        const validateAdjList = (): boolean => {
            if (N < 0) return false;

            for (const list of adjList) {
                for (const val of list) {
                    if (val < 1 || val > N) return false;
                }
            }

            return true;
        };

        if (!validateAdjList())
            throw new Error("Illegal argument exception");

        const nodes = Array.from({
            length: N
        },(_, i) => new _Node(i + 1));

        for (let i = 0; i < N; ++i) {
            for (const neighVal of adjList[i])
                nodes[i].neighbors.push(nodes[neighVal - 1]);
        }

        return nodes[0];
    }

    public static printGraph(node: _Node | null, style: string = "bfs"): void {
        if (!node) {
            console.log("empty");
            return;
        }

        const map = new Map<_Node, _Node[]>();

        switch (style) {
            case "dfs":
                const dfs = (node: _Node): void => {
                    map.set(node, []);
                    const neighbors = map.get(node)!;

                    for (const neigh of node.neighbors) {
                        neighbors.push(neigh);

                        if (!map.has(neigh))
                            dfs(neigh);
                    }
                };

                dfs(node);
                break;

            case "bfs":
                const queue = new Queue<_Node>([node]);

                while (!queue.isEmpty()) {
                    const cur = queue.dequeue()!;
                    map.set(cur, []);
                    const neighbors = map.get(cur)!;

                    for (const neigh of cur.neighbors) {
                        neighbors.push(neigh);

                        if (!map.has(neigh))
                            queue.enqueue(neigh);
                    }
                }

                break;

            default:
                throw new Error("No such style exist");
        }

        let ans = "";

        for (const list of map.values())
            ans += list.map(node => node.val).join(",") + " ";

        console.log(ans);
    }
}