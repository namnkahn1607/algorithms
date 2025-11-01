/* 200b. number of islands */
// @: bfs
import { IsLandMap } from "./run";
import { Queue } from "datastructures-js";

class B extends IsLandMap {
    numIslands(grid: string[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];
        
        let count = 0;

        for (let R = 0; R < row; ++R) {
            for (let C = 0; C < col; ++C) {
                if (grid[R][C] === "1") {
                    ++count;

                    const queue = new Queue<number[]>([[R, C]]);

                    while (!queue.isEmpty()) {
                        const [R, C] = queue.dequeue()!;

                        for (const [dR, dC] of dirs) {
                            const [newR, newC] = [R + dR, C + dC];

                            if (0 <= newR && newR < row &&
                                0 <= newC && newC < col &&
                                grid[newR][newC] === "1") {
                                queue.enqueue([newR, newC]);
                                grid[newR][newC] = "#";
                            }
                        }
                    }
                }
            }
        }

        return count;
    }
}

B.run(new B());