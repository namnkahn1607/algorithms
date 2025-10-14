/* 77a. combinations */
// @: backtrack I
import { Combinations } from "./run";

class A extends Combinations {
    combine(n: number, k: number): number[][] {
        const ans: number[][] = [];

        const dfs = (i: number, comb: number[]): void => {
            if (comb.length === k) {
                ans.push([...comb]);
                return;
            }

            if (i > n)
                return;

            comb.push(i);
            dfs(i + 1, comb);

            comb.pop();
            dfs(i + 1, comb);
        };

        dfs(1, []);

        return ans;
    }
}

A.run(new A());