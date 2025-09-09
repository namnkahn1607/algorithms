/* 40. combination sum 2 */
// #: backtracking

class src40 {
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a, b) => a - b);

        const ans: number[][] = [];
        const m: number = candidates.length;

        const dfs = function(i: number, comb: number[], remain: number): void {
            if (remain === 0) {
                ans.push([...comb]);
                return;
            }

            if (remain < 0 || i > m)
                return;

            comb.push(candidates[i]);
            dfs(i + 1, comb, remain - candidates[i]);

            comb.pop();

            while (i + 1 < m && candidates[i] === candidates[i + 1])
                ++i;

            dfs(i + 1, comb, remain);
        };

        dfs(0, [], target);

        return ans;
    }

    public static main(): void {
        // add candidates and target
        const candidates: number[] = [9, 2, 2, 4, 6, 1, 5];
        const target: number = 8;

        // all valid combinations that sum to target
        let ans: number[][] = new src40().combinationSum2(candidates, target);

        console.log(ans.map(val => {
            return val.join(",");
        }).join(" "));
    }
}

src40.main();

// more sols at: https://neetcode.io/solutions/combination-sum-ii