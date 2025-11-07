/* data structures: Union Find */
// union by rank

class DisjointSet {
    private readonly par: Array<number>;
    private readonly rank: Array<number>;

    constructor(n: number) {
        this.par = new Array<number>(n);
        this.rank = new Array<number>(n);

        for (let i = 0; i < n; ++i) {
            this.par[i] = i;
            this.rank[i] = 0;
        }
    }

    find(i: number): number {
        if (this.par[i] !== i)
            this.par[i] = this.find(this.par[i]);

        return this.par[i];
    }

    union(x: number, y: number): boolean {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY)
            return false;

        const par = this.par;
        const rank = this.rank;

        if (rank[rootX] < rank[rootY]) {
            par[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            par[rootY] = rootX;
        } else {
            par[rootX] = rootY;
            rank[rootY] += 1;
        }

        return true;
    }
}

export { DisjointSet };