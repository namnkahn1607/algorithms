/* 471a. atlantic pacific water flow */
// @: bidirectional bfs
import { Queue } from "datastructures-js";

class A {
    pacificAtlantic(heights: number[][]): number[][] {
        const [ROW, COL] = [heights.length, heights[0].length];
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        const atlantic = new Set<string>();
        const pacific = new Set<string>();

        const key = (pos: number[]) => pos.join(',');

        for (let i = 0; i < ROW; ++i) {
            pacific.add(key([i, 0]));
            atlantic.add(key([i, COL - 1]));
        }

        for (let j = 0; j < COL; ++j) {
            pacific.add(key([0, j]));
            atlantic.add(key([ROW - 1, j]));
        }

        const expand = (ocean: Set<string>) => {
            const queue = new Queue<number[]>(
                [...ocean].map(
                    item => item.split(',').map(Number)
                )
            );

            while (!queue.isEmpty()) {
                const [R, C] = queue.dequeue()!;

                for (const [dR, dC] of dirs) {
                    const [newR, newC] = [R + dR, C + dC];
                    const neiKey = key([newR, newC]);

                    if (newR < 0 || newR >= ROW ||
                        newC < 0 || newC >= COL) continue;

                    if (ocean.has(neiKey)) continue;

                    if (heights[newR][newC] >= heights[R][C]) {
                        ocean.add(neiKey);
                        queue.push([newR, newC]);
                    }
                }
            }
        };

        expand(atlantic);
        expand(pacific);

        return [...pacific]
            .filter(cell => atlantic.has(cell))
            .map(cell => cell.split(',').map(Number));
    }
}

export { A };