/* algorithms: DFS and BFS on Graph */

import { Stack, Queue } from 'datastructures-js';

class GraphTraversal {
    recursiveDFS(
        n: number, edges: number[][], undirected: boolean = false
    ): number[] {
        const adj = Array.from(
            { length: n }, () => new Array<number>()
        );

        for (const [src, dst] of edges) {
            adj[src].push(dst);

            if (undirected) {
                adj[dst].push(src);
            }
        }

        const ans: number[] = [];
        const visited = new Array(n).fill(false);

        const dfs = (curr: number) => {
            visited[curr] = true;
            ans.push(curr); // additional logic

            for (const nei of adj[curr]) {
                if (visited[nei])
                    continue;

                dfs(nei);
            }
        };

        for (let i = 0; i < n; ++i) {
            if (!visited[i]) dfs(i);
        }

        return ans;
    }

    iterativeDFS(
        n: number, edges: number[][], undirected: boolean = false
    ): number[] {
        const adj = Array.from(
            { length: n }, () => new Array<number>()
        );

        for (const [src, dst] of edges) {
            adj[src].push(dst);

            if (undirected) {
                adj[dst].push(src);
            }
        }

        const ans: number[] = [];
        const visited = new Array(n).fill(false);

        const dfs = (src: number) => {
            const stack = new Stack<number>([src]);
            visited[src] = true;

            while (!stack.isEmpty()) {
                const curr = stack.pop()!;
                ans.push(curr);

                for (const nei of adj[curr]) {
                    if (!(visited[nei])) {
                        stack.push(nei);
                        visited[nei] = true;
                    }
                }
            }
        };

        for (let i = 0; i < n; ++i) {
            if (!visited[i]) dfs(i);
        }

        return ans;
    }

    BFS(
        n: number, edges: number[][], undirected: boolean = false
    ): number[] {
        const adj = Array.from(
            { length: n }, () => new Array<number>()
        );

        for (const [src, dst] of edges) {
            adj[src].push(dst);

            if (undirected) {
                adj[dst].push(src);
            }
        }

        const ans: number[] = [];
        const visited = new Array(n).fill(false);

        const bfs = (src: number) => {
            const queue = new Queue<number>([src]);
            visited[src] = true;

            while (!queue.isEmpty()) {
                const curr = queue.dequeue()!;
                ans.push(curr); // additional logic

                for (const nei of adj[curr]) {
                    if (visited[nei])
                        continue;

                    queue.enqueue(nei);
                    visited[nei] = true;
                }
            }
        };

        for (let i = 0; i < n; ++i) {
            if (!visited[i]) bfs(i);
        }

        return ans;
    }
}

export { GraphTraversal };