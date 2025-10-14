/* 746a. min cost climbing stairs */
// @: dp (bottom up)
import { StairCost } from "./run";

class A extends StairCost {
    minCostClimbingStairs(cost: number[]): number {
        const m = cost.length;

        for (let i = 2; i < m; ++i)
            cost[i] += Math.min(cost[i - 1], cost[i - 2]);

        return Math.min(cost[m - 1], cost[m - 2]);
    }
}

A.run(new A());