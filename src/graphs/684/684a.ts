/* 684a. redundant connection */
// @: disjoint set

class A {
    findRedundantConnection(edges: number[][]): number[] {
        const par = Array.from(
            { length: edges.length + 1 }, (_, i) => i
        );
        const rank = new Array<number>(
            edges.length + 1
        ).fill(1);

        const find = (i: number): number => {
            if (par[i] !== i)
                par[i] = find(par[i]);

            return par[i];
        };

        const union = (x: number, y: number): boolean => {
            const [rx, ry] = [find(x), find(y)];

            if (rx === ry) return false;

            if (rank[rx] < rank[ry]) {
                par[rx] = ry;
            } else if (rank[rx] > rank[ry]) {
                par[ry] = rx;
            } else {
                par[rx] = ry
                rank[ry] += 1
            }

            return true;
        };

        let redundant = [-1, -1];

        for (const [u, v] of edges) {
            if (!union(u, v))
                redundant = [u, v];
        }

        return redundant;
    }
}

export { A };