/* 1466b. reorder routes to make all paths lead to the city zero */
// @: dfs - II

class B {
    minReorder(n: number, connections: number[][]): number {
        const adj = new Map<number, number[][]>();

        for (let i = 0; i < n; ++i)
            adj.set(i, []);

        for (const [u, v] of connections) {
            adj.get(u)!.push([v, 1]);
            adj.get(v)!.push([u, 0]);
        }

        const visited = new Set<number>();
        let reorder = 0;

        const dfs = (node: number) => {
            visited.add(node);

            for (const [nei, cost] of adj.get(node)!) {
                if (visited.has(nei))
                    continue;

                reorder += cost;
                dfs(nei);
            }
        };

        dfs(0);

        return reorder;
    }
}

export { B };