/* algorithms: BFS matrix */

import { Queue } from "datastructures-js";

class bfsMatrix {
    shortestPath(grid: number[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const qu = new Queue<number[]>([[0, 0]]);
        grid[0][0] = 1;
        let length = 0;

        while (!qu.isEmpty()) {
            const len = qu.size();

            for (let i = 0; i < len; ++i) {
                const [R, C] = qu.dequeue()!;

                if (R === row - 1 && C === col - 1)
                    return length;

                for (const [dR, dC] of dirs) {
                    const [newR, newC] = [R + dR, C + dC];

                    if (newR === row || newC === col ||
                        Math.min(newR, newC) < 0 || grid[newR][newC] === 1)
                        continue;

                    qu.enqueue([newR, newC]);
                    grid[newR][newC] = 1;
                }
            }

            ++length;
        }

        return -1;
    }

    public static main(): void {
        // add matrix
        const grid = [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 1],
            [0, 1, 0, 0]
        ];

        // shortest path from top left to bottom right
        let ans: number = new bfsMatrix().shortestPath(grid);
        console.log(ans);
    }
}

bfsMatrix.main();