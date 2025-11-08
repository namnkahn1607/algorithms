/* 1584a. min cost to connect points */
// @: prim
import { MinPriorityQueue } from 'datastructures-js';

class A {
    minCostConnectPoints(points: number[][]): number {
        const distance = (i: number, j: number): number => {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];

            return Math.abs(x1 - x2) + Math.abs(y1 - y2);
        };

        const N = points.length;
        const visited = new Array<boolean>(N).fill(false);
        let cost = 0;

        const minPQ = new MinPriorityQueue<number[]>(
            item => item[0]
        );
        minPQ.enqueue([0, 0]);

        while (!minPQ.isEmpty()) {
            const [dist, i] = minPQ.dequeue()!;

            if (visited[i]) continue;

            cost += dist;
            visited[i] = true;

            for (let j = 0; j < N; ++j) {
                if (!visited[j]) {
                    minPQ.enqueue([distance(i, j), j]);
                }
            }
        }

        return cost;
    }
}

export { A };