/* advanced algorithms: Topological Sort */

import { Queue } from 'datastructures-js';

class Topological {
    topologicalSort(n: number, edges: number[][]): number[] {
        const adj = Array.from(
            { length: n }, () => new Array<number>()
        );

        for (const [src, dst] of edges) {
            adj[src].push(dst);
        }

        const ans: number[] = [];
        const onPath = new Array<boolean>(n)
            .fill(false);
        const visited = new Array<boolean>(n)
            .fill(false);

        const dfs = (curr: number): boolean => {
            onPath[curr] = true;
            visited[curr] = true;

            for (const nei of adj[curr]) {
                if (onPath[nei]) return false;
                if (visited[nei]) continue;

                if (!dfs(nei)) {
                    return false;
                }
            }

            onPath[curr] = false;
            ans.push(curr);

            return true;
        };

        for (let i = 0; i < n; ++i) {
            if (!visited[i] && !dfs(i)) {
                return [];
            }
        }

        return ans.reverse();
    }

    kahn(n: number, edges: number[][]): number[] {
        const adj = Array.from(
            { length: n }, () => new Array<number>()
        );
        const indegree = new Array<number>(n)
            .fill(0);

        for (const [src, dst] of edges) {
            adj[src].push(dst);
            ++indegree[dst];
        }

        const ans: number[] = [];
        const queue = new Queue<number>();

        for (let i = 0; i < n; ++i) {
            if (indegree[i] === 0) {
                queue.enqueue(i);
            }
        }

        while (!queue.isEmpty()) {
            const curr = queue.dequeue()!;
            ans.push(curr);

            for (const nei of adj[curr]) {
                --indegree[nei];

                if (indegree[nei] === 0) {
                    queue.enqueue(nei);
                }
            }
        }

        if (ans.length === n)
            return ans;

        return [];
    }
}

export { Topological };