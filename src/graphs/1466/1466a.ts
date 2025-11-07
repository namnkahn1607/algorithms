/* 1466a. reorder routes to make all paths lead to the city zero */
// @: dfs - I

class A {
    minReorder(n: number, connections: number[][]): number {
        const adj = new Map<number, number[]>();

        for (let i = 0; i < n; ++i)
            adj.set(i, []);

        for (const [u, v] of connections) {
            adj.get(u)!.push(v);
            adj.get(v)!.push(u);
        }

        const visited = new Set<number>();
        const routes = new Set<string>(
            connections.map(item => item.join(','))
        );
        let reorder = 0;

        const dfs = (node: number, par: number) => {
            visited.add(node);

            for (const nei of adj.get(node)!) {
                if (nei === par || visited.has(nei))
                    continue;

                if (routes.has(`${node},${nei}`))
                    ++reorder;

                dfs(nei, node);
            }
        };

        dfs(0, -1);

        return reorder;
    }
}

export { A };