/* 746b. min cost climbing stairs */
// @: dp (top down)
import { StairCost } from "./run";

class B extends StairCost {
    minCostClimbingStairs(cost: number[]): number {
        const m = cost.length;
        const cache = new Array(m).fill(-1);

        const dp = (i: number): number => {
            if (i >= m)
                return 0;

            if (cache[i] === -1)
                cache[i] = cost[i] + Math.min(dp(i + 1), dp(i + 2));

            return cache[i];
        };

        return Math.min(dp(0), dp(1));
    }
}

B.run(new B());