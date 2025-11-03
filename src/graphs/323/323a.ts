/* 323a. number of connected components in an undirected graph */
// @: disjoint set

class A {
    countComponents(n: number, edges: number[][]): number {
        const par = Array.from(
            { length: n }, (_, i) => i
        );
        const rank = new Array<number>(n).fill(1);
        let components = n;

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

        for (const [u, v] of edges) {
            if (union(u, v)) --components;
        }

        return components;
    }
}

export { A };