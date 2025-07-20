/* algorithms: Union Find */

class UnionFind {
    private readonly parent: number[];
    private readonly treeSize: number[];
    private setCount;

    private validateValue(val: number): void {
        if (val < 0 || val >= this.parent.length)
            throw new Error(`access value ${val} is not within [0, n)`);
    }

    constructor(N: number) {
        if (N <= 0)
            throw new Error("invalid arguments: N must be >= 0");

        this.parent = new Array<number>(N);
        this.treeSize = new Array<number>(N).fill(1);
        this.setCount = N;

        for (let i = 0; i < N; ++i)
            this.parent[i] = i;
    }

    // method.find
    public root(i: number): number {
        this.validateValue(i);

        if (i !== this.parent[i])
            this.parent[i] = this.root(this.parent[i]);

        return this.parent[i];
    }

    // method.union
    public union(x: number, y: number): void {
        const rx = this.root(x);
        const ry = this.root(y);

        if (rx === ry) return;

        --this.setCount;

        if (this.treeSize[rx] <= this.treeSize[ry]) {
            this.parent[rx] = ry;
            this.treeSize[ry] += this.treeSize[rx];
        } else {
            this.parent[ry] = rx;
            this.treeSize[rx] += this.treeSize[ry];
        }
    }

    public connected(x: number, y: number): boolean {
        return this.root(x) === this.root(y);
    }

    public count(): number {
        return this.setCount;
    }

    public static main(): void {
        // create UnionFind
        const N: number = 10;
        const uf: UnionFind = new UnionFind(N);

        // add union list
        const list: number[][] = [
            [4, 3], [3, 8], [6, 5], [9, 4], [2, 1], [8, 9],
            [5, 0], [7, 2], [6, 1], [1, 0], [6, 7]
        ];

        for (let i = 0; i < list.length; ++i) {
            const x = list[i][0];
            const y = list[i][1];

            if (uf.connected(x, y))
                console.log(`${x} is already connected to ${y}`);
            else {
                uf.union(x, y);
                console.log(`connected ${x} to ${y}`);
            }
        }

        console.log(`total number of sets: ${uf.count()}`);
    }
}

UnionFind.main();