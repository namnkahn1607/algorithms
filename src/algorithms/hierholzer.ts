/* advanced algorithms: Hierholzer */
// build Eulerian path (circuit)

class Eulerian {
    inOutDeg(adj: number[][]): number[][] {
        const vertices = adj.length;
        const indeg = new Array(vertices).fill(0);
        const outdeg = new Array(vertices).fill(0);

        for (let i = 0; i < vertices; ++i) {
            outdeg[i] = adj[i].length;

            for (const nei of adj[i]) {
                ++indeg[nei];
            }
        }

        return [indeg, outdeg];
    }

    hasPath(adj: number[][]): boolean {
        if (adj.length === 0) {
            throw new Error('adjacency list can not be empty');
        }

        const len = adj.length;
        const [indeg, outdeg] = this.inOutDeg(adj);
        let [start, end] = [0, 0];

        for (let i = 0; i < len; ++i) {
            switch (outdeg[i] - indeg[i]) {
                case 0: continue;
                case 1: ++start; break;
                case -1: ++end; break;
                default:
                    return false;
            }
        }

        return (start === 0 && end === 0)
            || (start === 1 && end === 1);
    }

    buildPath(adj: number[][]): number[] {
        if (!this.hasPath(adj)) return [];

        const vertices = adj.length;
        const edges = adj.reduce((count, item) => count + item.length, 0)

        const [indeg, outdeg] = this.inOutDeg(adj);
        const path: number[] = [];

        const start = (): number => {
            let start = 0;

            for (let i = 0; i < vertices; ++i) {
                if (outdeg[i] - indeg[i] === 1)
                    return i;

                if (outdeg[i] > 0)
                    start = i;
            }

            return start;
        };

        const dfs = (curr: number) => {
            while (outdeg[curr] !== 0) {
                --outdeg[curr];
                const nei = adj[curr][outdeg[curr]];
                dfs(nei);
            }

            path.push(curr);
        };

        dfs(start());

        if (path.length === edges + 1)
            return path.reverse();

        return [];
    }
}

export { Eulerian };