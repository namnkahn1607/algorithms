/* 1631a. path with minimum effort */
// @: dijkstra
import { MinPriorityQueue } from "datastructures-js";

class A {
    minimumEffortPath(heights: number[][]): number {
        const [ROW, COL] = [heights.length, heights[0].length];
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        const pq = new MinPriorityQueue<[number, number, number]>(
            item => item[2]
        );
        pq.enqueue([0, 0, 0]);

        const visited = new Set<string>();

        while (!pq.isEmpty()) {
            const [R, C, effort] = pq.dequeue()!;
            const key = `${R},${C}`;

            if (visited.has(key))
                continue;

            visited.add(key);

            if (R === ROW - 1 && C === COL - 1)
                return effort;

            for (const [dR, dC] of dirs) {
                const [newR, newC] = [R + dR, C + dC];
                const neiKey = `${newR},${newC}`;

                if (newR < 0 || newR >= ROW || newC < 0 || newC >= COL)
                    continue;

                if (visited.has(neiKey))
                    continue;

                const newEffort = Math.max(
                    effort, Math.abs(heights[newR][newC] - heights[R][C])
                );

                pq.enqueue([newR, newC, newEffort]);
            }
        }

        return -1;
    }
}

export { A };