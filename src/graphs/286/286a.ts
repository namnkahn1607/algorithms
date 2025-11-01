/* 286a. walls and gates */
// @: multi-source bfs
import { WallGates } from "./run";
import { Queue } from "datastructures-js";

class A extends WallGates {
    wallsAndGates(grid: number[][]): void {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const queue = new Queue<number[]>();

        for (let R = 0; R < row; ++R) {
            for (let C = 0; C < col; ++C) {
                if (grid[R][C] === 0)
                    queue.enqueue([R, C]);
            }
        }

        while (!queue.isEmpty()) {
            const [R, C] = queue.dequeue()!;

            for (const [dR, dC] of dirs) {
                const [newR, newC] = [R + dR, C + dC];

                if (0 <= newR && newR < row &&
                    0 <= newC && newC < col &&
                    grid[newR][newC] === 2147483647) {
                    grid[newR][newC] = grid[R][C] + 1;
                    queue.enqueue([newR, newC]);
                }
            }
        }
    }
}

A.run(new A());