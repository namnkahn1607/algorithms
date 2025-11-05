/* 1631b. path with minimum effort */
// @: binary search + bfs
import { Queue } from 'datastructures-js';

class B {
    minimumEffortPath(heights: number[][]): number {
        const [ROW, COL] = [heights.length, heights[0].length];
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        const bfs = (limit: number): boolean => {
            const visited = new Set<string>(['0,0']);
            const queue = new Queue<number[]>([[0, 0]]);

            while (!queue.isEmpty()) {
                const [R, C] = queue.dequeue()!;

                if (R === ROW - 1 && C == COL - 1)
                    return true;

                for (const [dR, dC] of dirs) {
                    const [newR, newC] = [R + dR, C + dC];

                    if (newR < 0 || newR >= ROW || newC < 0 || newC >= COL)
                        continue;

                    if (visited.has(`${newR},${newC}`))
                        continue;

                    if (Math.abs(heights[newR][newC] - heights[R][C]) > limit)
                        continue;

                    visited.add(`${newR},${newC}`);
                    queue.enqueue([newR, newC]);
                }
            }

            return false;
        };

        let [low, high] = [0, 1_000_000];
        let ans = low;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (bfs(mid)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}

export { B };