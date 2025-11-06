/* 778a. swim in rising water */
// @: binary search + bfs
import { Queue } from 'datastructures-js';

class A {
    swimInWater(grid: number[][]): number {
        const N = grid.length;
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        const bfs = (lvl: number): boolean => {
            const visited = new Set<string>(['0,0']);
            const queue = new Queue<number[]>([[0, 0]]);

            while (!queue.isEmpty()) {
                const [R, C] = queue.dequeue()!;

                if (R === N - 1 && C === N - 1)
                    return true;

                for (const [dR, dC] of dirs) {
                    const [newR, newC] = [R + dR, C + dC];
                    const neiKey = `${newR},${newC}`;

                    if (newR < 0 || newR >= N || newC < 0 || newC >= N)
                        continue;

                    if (visited.has(neiKey))
                        continue;

                    if (grid[newR][newC] > lvl)
                        continue;

                    visited.add(neiKey);
                    queue.enqueue([newR, newC]);
                }
            }

            return false;
        };

        let [low, high] = [grid[0][0], N * N - 1];
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

export { A };