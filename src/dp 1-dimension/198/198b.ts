/* 198b. house robber */
// @: dp (top down)
import { Robber } from "./main";

class B extends Robber {
    rob(nums: number[]): number {
        const m = nums.length;
        const cache = new Array(m).fill(-1);

        const dp = (i: number): number => {
            if (i >= m) return 0;

            if (cache[i] === -1)
                cache[i] = Math.max(dp(i + 1), nums[i] + dp(i + 2));

            return cache[i];
        };

        return dp(0);
    }
}

B.run(new B());