/* 216. combination sum III */
// @: backtrack

class A {
    combinationSum3(k: number, n: number): number[][] {
        const ans: number[][] = [];

        const dfs = (start: number, comb: number[], remain: number) => {
            if (comb.length === k) {
                if (remain === 0)
                    ans.push(comb.slice());

                return;
            }

            for (let i = start; i <= 9; ++i) {
                if (remain - i < 0)
                    break;

                comb.push(i);
                dfs(i + 1, comb, remain - i);
                comb.pop();
            }
        };

        dfs(1, [], n);

        return ans;
    }
}

export { A };