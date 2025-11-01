/* advanced algorithm: A* Search */
// shortest path from top left to bottom right
import { MinPriorityQueue } from "datastructures-js";

class Astar {
    shortestPath(grid: number[][], allowDiagonal: boolean = false): number {
        const N = grid.length;
        const dirs = allowDiagonal
            ? [0, 1, 0, -1, 0, 1, 1, -1, -1, 1]
            : [0, 1, 0, -1, 0];
        const maxDirs = allowDiagonal ? 9 : 4;

        const start = [0, 0];
        const goal = [N - 1, N - 1];

        if (grid[0][0] !== 0 || grid[N - 1][N - 1] !== 0)
            return -1;

        const toKey = (pos: number[]) => pos.join(',');
        const heuristic = allowDiagonal
            ? (pos: number[]) => Math.max(N - 1 - pos[0], N - 1 - pos[1])
            : (pos: number[]) => N - 1 - pos[0] + N - 1 - pos[1];

        const closed = new Set<string>();
        const opened = new MinPriorityQueue<[number[], number]>(
            item => {
                const [pos, g] = item;
                return g + heuristic(pos);
            }
        );
        opened.enqueue([start, 0]);
        
        const gCost = new Map<string, number>();
        gCost.set(toKey(start), 0);

        while (!opened.isEmpty()) {
            const [curr, _] = opened.dequeue()!;
            const currKey = toKey(curr);

            if (closed.has(currKey))
                continue;

            if (curr[0] === goal[0] && curr[1] === goal[1])
                return gCost.get(currKey)! + 1;

            closed.add(currKey);

            for (let d = 0; d < maxDirs; d++) {
                const newR = curr[0] + dirs[d];
                const newC = curr[1] + dirs[d + 1];
                const neiKey = toKey([newR, newC]);

                if (newR < 0 || newR >= N || newC < 0 || newC >= N)
                    continue;

                if (grid[newR][newC] !== 0 || closed.has(neiKey))
                    continue;

                const newG = gCost.get(currKey)! + 1;

                if (!gCost.has(neiKey) || newG < gCost.get(neiKey)!) {
                    gCost.set(neiKey, newG);
                    opened.enqueue([[newR, newC], newG]);
                }
            }
        }

        return -1;
    }

    public static run(): void {
        const grid: number[][] = [
            [0, 0, 0, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 1, 0]
        ];

        const dist1 = new Astar().shortestPath(grid, false);
        console.log('Shortest Distance', dist1);

        const dist2 = new Astar().shortestPath(grid, true);
        console.log('Shortest Diagonal Distance', dist2);
    }
}

Astar.run();