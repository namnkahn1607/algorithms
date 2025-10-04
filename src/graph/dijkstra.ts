/* algorithms: Dijkstra */

import { MinPriorityQueue } from "datastructures-js";

class Dijkstra {
    shortestPath(N: number, edges: number[][], src: number): Map<number, number> {
        const adj = new Map<number, number[][]>();
        const dist = new Map<number, number>();

        for (let i = 0; i < N; ++i) {
            adj.set(i, []);
            dist.set(i, -1);
        }

        for (const [u, v, w] of edges)
            adj.get(u)!.push([v, w]);

        const minHeap = new MinPriorityQueue<number[]>(
            { compare: (a, b) => a[0] - b[0] }
        );
        minHeap.enqueue([0, src]);

        while (!minHeap.isEmpty()) {
            const [w1, n1] = minHeap.dequeue()!;

            if (dist.get(n1)! !== -1)
                continue;

            dist.set(n1, w1);

            for (const [n2, w2] of adj.get(n1)!) {
                if (dist.get(n2)! === -1)
                    minHeap.enqueue([w1 + w2, n2]);
            }
        }

        return dist;
    }

    public static main(): void {
        const N: number = 5;
        const edges: number[][] = [
            [0, 1, 10], [0, 2, 3], [1, 3, 2], [2, 1, 4],
            [2, 3, 8], [2, 4, 2], [3, 4, 5]
        ];
        const src: number = 0;

        console.log(new Dijkstra().shortestPath(N, edges, src));
    }
}

Dijkstra.main();