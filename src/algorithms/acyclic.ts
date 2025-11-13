/* algorithms: Graph Cycle Detection */

class Acyclic {
    notAcyclic(n: number, edges: number[][]): boolean {
        const adj = Array.from(
            { length: n }, () => new Array<number>()
        );

        for (const [src, dst] of edges) {
            adj[src].push(dst);
        }

        const visited = new Array(n).fill(false);
        const onPath = new Array(n).fill(false);

        const dfs = (curr: number): boolean => {
            onPath[curr] = true;
            visited[curr] = true;

            for (const nei of adj[curr]) {
                if (onPath[nei]) return true;
                if (visited[nei]) continue;

                if (dfs(nei)) {
                    return true;
                }
            }

            onPath[curr] = false;
            return false;
        };

        for (let i = 0; i < n; ++i) {
            if (!visited[i] && dfs(i)) {
                return true;
            }
        }

        return false;
    }

    hasCycle(n: number, edges: number[][]): boolean {
        const adj = Array.from(
            { length: n }, () => new Array<number>()
        );

        for (const [src, dst] of edges) {
            adj[src].push(dst);
        }

        const visited = new Array(n).fill(false);

        const dfs = (curr: number, par: number): boolean => {
            visited[curr] = true;

            for (const nei of adj[curr]) {
                if (visited[nei]) {
                    if (nei !== par)
                        return true;

                    continue;
                }

                if (dfs(nei, curr)) {
                    return true;
                }
            }

            return false;
        };

        for (let i = 0; i < n; ++i) {
            if (!visited[i] && dfs(i, -1)) {
                return true;
            }
        }

        return false;
    }
}

export { Acyclic };