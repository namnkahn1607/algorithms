/* algorithms: Center of a Graph */

class Centroid {
    centerGraph(n: number, edges: number[][]): number[] {
        const adj = Array.from(
            { length: n }, () => new Array<number>()
        );
        const degree = new Array(n).fill(0);

        for (const [u, v] of edges) {
            adj[u].push(v); ++degree[u];
            adj[v].push(u); ++degree[v];
        }

        let leaves: number[] = [];

        for (let i = 0; i < n; ++i) {
            if (degree[i] <= 1) leaves.push(i);
        }

        let remain = n;

        while (remain > 2) {
            remain -= leaves.length;
            const newLeaves: number[] = [];

            for (const leaf of leaves) {
                for (const nei of adj[leaf]) {
                    if (--degree[nei] === 1) {
                        newLeaves.push(nei);
                    }
                }
            }

            leaves = newLeaves;
        }

        return leaves;
    }
}

export { Centroid };