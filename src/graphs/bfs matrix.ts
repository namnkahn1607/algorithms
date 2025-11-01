/* algorithms: BFS on matrix */
// shortest path length from top left to bottom right
import { Queue } from "datastructures-js";

class BFS {
    shortestPath(grid: number[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const queue = new Queue<number[]>([[0, 0]]);
        let length = 0;

        while (!queue.isEmpty()) {
            const len = queue.size();

            for (let i = 0; i < len; ++i) {
                const [R, C] = queue.dequeue()!;
                grid[R][C] = 1;

                if (R === row - 1 && C === col - 1)
                    return length;

                for (const [dR, dC] of dirs) {
                    const [newR, newC] = [R + dR, C + dC];

                    if (0 <= newR && newR < row &&
                        0 <= newC && newC < col &&
                        grid[newR][newC] === 0)
                        queue.enqueue([newR, newC]);
                }
            }

            ++length;
        }

        return -1;
    }
}

export { BFS };