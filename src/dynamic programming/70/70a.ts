/* 70a. climbing stairs */
// @: dp (top down)
import { StairsClimb } from "./run";

class A extends StairsClimb {
    climbStairs(n: number): number {
        const cache = new Array(n + 1).fill(-1);

        const dp = (i: number): number => {
            if (i <= 2) return i;

            if (cache[i] === -1)
                cache[i] = dp(i - 1) + dp(i - 2);

            return cache[i];
        };

        return dp(n);
    }
}

A.run(new A());