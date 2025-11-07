/* 787a. cheapest flights within k stops */
// @: dijkstra - I
import { MinPriorityQueue } from "datastructures-js";

class A {
    findCheapestPrice(
        n: number, flights: number[][], src: number, dst: number, k: number
    ): number {
        const adj = new Map<number, number[][]>();

        for (let i = 0; i < n; ++i)
            adj.set(i, []);

        for (const [u, v, price] of flights)
            adj.get(u)!.push([v, price]);

        const best = new Map<string, number>();
        const minPQ = new MinPriorityQueue<number[]>(
            item => item[0]
        );
        minPQ.enqueue([0, src, k + 1]);

        while (!minPQ.isEmpty()) {
            const [cost, curr, stopsLeft] = minPQ.dequeue()!;
            const currKey = `${curr},${stopsLeft}`;

            if (curr === dst) return cost;

            if (best.has(currKey) && best.get(currKey)! <= cost)
                continue;

            best.set(currKey, cost);

            if (stopsLeft > 0) {
                for (const [nei, price] of adj.get(curr)!) {
                    minPQ.enqueue([cost + price, nei, stopsLeft - 1]);
                }
            }
        }

        return -1;
    }
}

export { A };