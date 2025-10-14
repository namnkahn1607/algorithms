/* 77b. combinations */
// @: backtrack II
import { Combinations } from "./run";

class B extends Combinations {
    combine(n: number, k: number): number[][] {
        const ans: number[][] = [];

        const dfs = (start: number, comb: number[]): void => {
            if (comb.length === k) {
                ans.push([...comb]);
                return;
            }

            if (start > n)
                return;

            for (let i = start; i <= n; ++i) {
                comb.push(i);
                dfs(i + 1, comb);
                comb.pop();
            }
        };

        dfs(1, []);

        return ans;
    }
}

B.run(new B());