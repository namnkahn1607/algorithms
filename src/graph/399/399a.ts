/* 399a. evaluate division */
// @: graph + dfs

class A {
    calcEquation(
        equations: string[][], values: number[], queries: string[][]
    ): number[] {
        const adjList = createAdjList(equations, values);
        const visited = new Set<string>();

        const dfs = (num: string, den: string): number => {
            if (!adjList.has(num) || !adjList.has(den))
                return -1;

            if (num === den) return 1;

            visited.add(num);

            for (const [nei, res] of adjList.get(num)!) {
                if (!visited.has(nei)) {
                    const check = dfs(nei, den);

                    if (check !== -1) {
                        return res * check;
                    }
                }
            }

            visited.delete(num);
            return -1;
        };

        const ans: number[] = [];

        for (const [num, den] of queries) {
            visited.clear();
            ans.push(dfs(num, den));
        }

        return ans;
    }
}

const createAdjList = (
    equations: string[][], values: number[]
): Map<string, [string, number][]> => {
    const size = values.length;
    const adjList = new Map<string, [string, number][]>();

    for (let i = 0; i < size; ++i) {
        const [num, den] = equations[i];
        const val = values[i];

        if (!adjList.has(num)) adjList.set(num, []);
        if (!adjList.has(den)) adjList.set(den, []);

        adjList.get(num)!.push([den, val]);
        adjList.get(den)!.push([num, 1 / val]);
    }

    return adjList;
};

export { A, createAdjList };