/* 261a. graph valid tree */
// @: graph + dfs

class A {
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length > n - 1)
            return false;

        const adj = Array.from(
            { length: n }, () => Array<number>()
        );

        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visit = new Set<number>();

        const dfs = (node: number, par: number): boolean => {
            if (visit.has(node))
                return false;

            visit.add(node);

            for (const nei of adj[node]) {
                if (nei === par)
                    continue;

                if (!dfs(nei, node))
                    return false;
            }

            return true;
        };

        return dfs(0, -1) && visit.size === n;
    }
}

export { A };