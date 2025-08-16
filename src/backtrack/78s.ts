/* 78. subsets */
// #: backtrack + DFS

class src78 {
    subsets(arr: number[]): number[][] {
        const m: number = arr.length;
        const [ans, subset]: [number[][], number[]] = [[], []];

        const dfs = function(idx: number): void {
            if (idx === m) {
                ans.push([...subset])
                return;
            }

            subset.push(arr[idx]);
            dfs(idx + 1);

            subset.pop();
            dfs(idx + 1);
        }

        dfs(0);

        return ans;
    }

    public static main(): void {
        // add array
        const arr: number[] = [1, 2, 3];

        // find all subset of the array
        let ans: number[][] = new src78().subsets(arr);

        for (const vec of ans)
            console.log("[", vec.join(" "), "]");
    }
}

src78.main();

// more sols at: https://neetcode.io/solutions/subsets