/* 547a. number of provinces */
// @: disjoint set

class A {
    findCircleNum(isConnected: number[][]): number {
        const size = isConnected.length;

        const par = Array.from(
            { length: size }, (_, i) => i
        );
        const rank = new Array<number>(size).fill(1);
        let province = size;

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
                par[rx] = ry;
                rank[ry] += 1;
            }

            return true;
        };

        for (let i = 0; i < size; ++i) {
            for (let j = i + 1; j < size; ++j) {
                if (isConnected[i][j] === 1 && union(i, j))
                    --province;
            }
        }

        return province;
    }
}

export { A };