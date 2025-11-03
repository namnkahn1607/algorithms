/* 261b. graph valid tree */
// @: graph + bfs
import { Queue } from "datastructures-js";

class B {
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length > n - 1)
            return false;

        const adj = Array.from(
            { length: n }, () => new Array<number>()
        );

        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const queue = new Queue<number[]>([[0, -1]]);
        const visit = new Set<number>([0]);

        while (!queue.isEmpty()) {
            const [node, par] = queue.dequeue()!;

            for (const nei of adj[node]) {
                if (nei === par)
                    continue;

                if (visit.has(nei))
                    return false;

                visit.add(nei);
                queue.enqueue([nei, node]);
            }
        }

        return visit.size === n;
    }
}

export { B };