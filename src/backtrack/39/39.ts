/* 39. combination sum */
// @: backtrack
import { CombinationSum } from "./run";

class A extends CombinationSum {
    combinationSum(nums: number[], target: number): number[][] {
        nums.sort((a, b) => a - b);

        const ans: number[][] = [];
        const m: number = nums.length;

        const dfs = (start: number, comb: number[], remain: number): void => {
            if (remain === 0) {
                ans.push([...comb]);
                return;
            }

            for (let i = start; i < m; ++i) {
                if (remain - nums[i] < 0)
                    return;

                comb.push(nums[i]);
                dfs(i, comb, remain - nums[i]);
                comb.pop();
            }
        };

        dfs(0, [], target);

        return ans;
    }
}

A.run(new A());