/* 1926a. nearest exit from entrance in maze */
// @: bfs

import { Queue } from "datastructures-js";

class A {
    nearestExit(maze: string[][], entrance: number[]): number {
        const [row, col] = [maze.length, maze[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const queue = new Queue<number[]>([entrance]);
        let dist = 0;

        while (!queue.isEmpty()) {
            const len = queue.size();

            for (let i = 0; i < len; ++i) {
                const [R, C] = queue.dequeue()!;

                if ((R === 0 || R === row - 1 || C === 0 || C === col) &&
                    (R !== entrance[0] || C !== entrance[1]))
                    return dist;

                for (const [dR, dC] of dirs) {
                    const [newR, newC] = [R + dR, C + dC];

                    if (newR === row || newC === col ||
                        Math.min(newR, newC) < 0 || maze[newR][newC] !== '.')
                        continue;

                    queue.enqueue([newR, newC]);
                    maze[newR][newC] = '+';
                }
            }

            ++dist;
        }

        return -1;
    }
}

export { A };