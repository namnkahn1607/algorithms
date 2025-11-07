/* advanced algorithms: Kruskal */

import { MinPriorityQueue } from 'datastructures-js';

class Kruskal {
    minimumSpanningTree(n: number, edges: number[][]): number[] {
        const par = Array.from(
            { length: n }, (_, i) => i
        );
        const rank = new Array<number>(n).fill(1);

        const find = (i: number): number => {
            if (par[i] !== i)
                par[i] = find(par[i]);

            return par[i];
        };

        const union = (x: number, y: number): boolean => {
            const [rx, ry] = [find(x), find(y)];

            if (rx === ry) return false;

            if (rank[rx] < rank[ry]) {
                par[rx] = ry;
            } else if (rank[rx] > rank[ry]) {
                par[ry] = rx;
            } else {
                par[rx] = ry;
                rank[ry] += 1;
            }

            return true;
        };

        const MST: number[] = [];
        const minPQ = new MinPriorityQueue<number[]>(
            item => item[2]
        );

        for (const edge of edges)
            minPQ.enqueue(edge);

        while (MST.length < n - 1) {
            if (minPQ.isEmpty()) return [];

            const [u, v, w] = minPQ.dequeue()!;

            if (!union(u, v))
                continue;

            MST.push(w);
        }

        return MST;
    }
}

export { Kruskal };