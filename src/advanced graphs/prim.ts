/* advanced algorithms: Prim */
// @: MST of an un-digraph
import { MinPriorityQueue } from "datastructures-js";

class Prim {
    minimumSpanningTree(n: number, edges: number[][]): number[] {
        const adj = new Map<
            number, [number, number][]
        >();

        for (const [u, v, w] of edges) {
            if (!adj.has(u)) adj.set(u, []);
            if (!adj.has(v)) adj.set(v, []);

            adj.get(u)!.push([v, w]);
            adj.get(v)!.push([u, w]);
        }

        const visited = new Set<number>([0]);
        const minPQ = new MinPriorityQueue<number[]>(
            item => item[0]
        );

        for (const [nei, w] of adj.get(0)!)
            minPQ.enqueue([w, 0, nei]);

        const MST: number[] = [];

        while (visited.size < n) {
            if (minPQ.isEmpty()) return [];

            const [w1, _, v1] = minPQ.dequeue()!;

            if (visited.has(v1))
                continue;

            MST.push(w1);
            visited.add(v1);

            for (const [v2, w2] of adj.get(v1)!) {
                if (!visited.has(v2)) {
                    minPQ.enqueue([w2, v1, v2]);
                }
            }
        }

        return MST;
    }
}

export { Prim };

// ref: https://www.youtube.com/watch?v=jsmMtJpPnhU