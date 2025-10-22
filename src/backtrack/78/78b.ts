/* 78b. subsets */
// @: backtrack + iteration
import { Subsets } from "./run";

class B extends Subsets {
    subsets(nums: number[]): number[][] {
        const ans: number[][] = [[]];

        for (const num of nums) {
            const size = ans.length;

            for (let i = 0; i < size; ++i) {
                const subset = ans[i].slice();
                subset.push(num);
                ans.push(subset);
            }
        }

        return ans;
    }
}

B.run(new B());