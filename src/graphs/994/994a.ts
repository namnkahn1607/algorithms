/* 994. rotting fruit */
// @: bfs
import { Queue } from "datastructures-js";

class A {
    fruitRotting(grid: number[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const queue = new Queue<number[]>();
        let [fresh, time] = [0, 0];

        for (let R = 0; R < row; ++R) {
            for (let C = 0; C < col; ++C) {
                if (grid[R][C] === 2)
                    queue.enqueue([R, C]);
                else if (grid[R][C] === 1)
                    ++fresh;
            }
        }

        while (fresh > 0 && !queue.isEmpty()) {
            const len = queue.size();

            for (let i = 0; i < len; ++i) {
                const [R, C] = queue.dequeue()!;

                for (const [dR, dC] of dirs) {
                    const [newR, newC] = [R + dR, C + dC];

                    if (0 <= newR && newR < row &&
                        0 <= newC && newC < col &&
                        grid[newR][newC] === 1) {
                        queue.enqueue([newR, newC]);
                        grid[newR][newC] = 2;
                        --fresh;
                    }
                }
            }

            ++time;
        }

        return fresh === 0 ? time : -1;
    }
}

export { A };