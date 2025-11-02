/* 752a. open the lock */
// @: A* search
import { MinPriorityQueue } from "datastructures-js";

class A {
    openLock(deadends: string[], target: string): number {
        const deaths = new Set<string>(deadends);

        if (deaths.has('0000')) return -1;

        const heuristic = (curr: string): number => {
            let diff = 0;

            for (let i = 0; i < 4; ++i) {
                const currDigit = +curr[i];
                const targetDigit = +target[i];
                const linearDiff = Math.abs(currDigit - targetDigit);

                diff += Math.min(linearDiff, 10 - linearDiff);
            }

            return diff;
        };

        const gCost = new Map<string, number>();
        gCost.set('0000', 0);

        const pq = new MinPriorityQueue<[string, number]>(
            item => item[1] + heuristic(item[0])
        );
        pq.enqueue(['0000', 0]);

        while (!pq.isEmpty()) {
            const [curr, currG] = pq.dequeue()!;

            if (currG > gCost.get(curr)!) continue;
            if (curr === target) return currG;

            const neiG = currG + 1;

            for (let i = 0; i < 4; ++i) {
                for (const delta of [-1, 1]) {
                    const digit = (+curr[i] + delta + 10) % 10;
                    const nei = curr.slice(0, i) + digit + curr.slice(i + 1);

                    if (deaths.has(nei)) continue;

                    if (!gCost.has(nei) || neiG < gCost.get(nei)!) {
                        gCost.set(nei, neiG);
                        pq.enqueue([nei, neiG]);
                    }
                }
            }
        }

        return -1;
    }
}

export { A };