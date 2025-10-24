/* 743a. network delay time */
// @: dijkstra
import { MinPriorityQueue } from "datastructures-js";

class A {
    networkDelayTime(times: number[][], n: number, k: number): number {
        const adj = new Map<number, number[][]>();

        for (let i = 1; i <= n; ++i)
            adj.set(i, []);

        for (const [u, v, w] of times)
            adj.get(u)!.push([v, w]);

        const minHeap = new MinPriorityQueue<number[]>(
            { compare: (a, b) => a[0] - b[0] }
        );
        minHeap.enqueue([0, k]);

        const visited = new Set<number>();
        let t = 0;

        while (!minHeap.isEmpty()) {
            const [w1, n1] = minHeap.dequeue()!;

            if (visited.has(n1))
                continue;

            t = w1;
            visited.add(n1);

            for (const [n2, w2] of adj.get(n1)!) {
                if (!visited.has(n2))
                    minHeap.enqueue([w1 + w2, n2]);
            }
        }

        return visited.size === n ? t : -1;
    }
}

export { A };