/* 40a. combination sum II */
// @: backtrack

class A {
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a, b) => a - b);

        const ans: number[][] = [];
        const m = candidates.length;

        const dfs = (i: number, comb: number[], remain: number) => {
            if (remain === 0) {
                ans.push(comb.slice());
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
}

export { A };