/* advanced algorithms: A* Search */
// @: standard tolerance
import { MinPriorityQueue } from "datastructures-js";

class Astar {
    shortestPath(grid: number[][], allowDiagonal: boolean = false): number {
        const N = grid.length;
        const dirs = allowDiagonal
            ? [0, 1, 0, -1, 0, 1, 1, -1, -1, 1]
            : [0, 1, 0, -1, 0];

        const maxDirs = allowDiagonal ? 9 : 4;

        if (grid[0][0] !== 0 || grid[N - 1][N - 1] !== 0)
            return -1;

        const heuristic = allowDiagonal
            ? (pos: number[]) => Math.max(N - 1 - pos[0], N - 1 - pos[1])
            : (pos: number[]) => N - 1 - pos[0] + N - 1 - pos[1];

        const opened = new MinPriorityQueue<[number, number, number]>(
            item => {
                const [R, C, g] = item;
                return g + heuristic([R, C]);
            }
        );
        opened.enqueue([0, 0, 0]);

        const gCost = new Map<string, number>();
        gCost.set('0,0', 0);

        while (!opened.isEmpty()) {
            const [R, C, currG] = opened.dequeue()!;
            const currKey = `${R},${C}`;

            if (currG > gCost.get(currKey)!)
                continue;

            if (R === N - 1 && C === N - 1)
                return currG + 1;

            for (let d = 0; d < maxDirs; d++) {
                const newR = R + dirs[d];
                const newC = C + dirs[d + 1];
                const neiKey = `${newR},${newC}`;

                if (newR < 0 || newR >= N || newC < 0 || newC >= N)
                    continue;

                if (grid[newR][newC] !== 0)
                    continue;

                const newG = currG + 1;

                if (!gCost.has(neiKey) || newG < gCost.get(neiKey)!) {
                    gCost.set(neiKey, newG);
                    opened.enqueue([newR, newC, newG]);
                }
            }
        }

        return -1;
    }
}

export { Astar };