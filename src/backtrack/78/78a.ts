/* 78a. subsets */
// @: backtrack + recursion
import { Subsets } from "./run";

class A extends Subsets {
    subsets(nums: number[]): number[][] {
        const ans: number[][] = [];

        const dfs = (i: number, subset: number[]) => {
            if (i >= nums.length) {
                ans.push(subset.slice());
                return;
            }

            subset.push(nums[i]);
            dfs(i + 1, subset);

            subset.pop();
            dfs(i + 1, subset);
        };

        dfs(0, []);

        return ans;
    }
}

A.run(new A());