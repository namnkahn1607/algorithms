/* 746. min cost climbing stairs */
// #: dp

class src746 {
    // 1. dp (top down)
    minCostClimbingStairs(cost: number[]): number {
        const m: number = cost.length;
        const dp = new Array<number>(m).fill(-1);

        const climb = function(i: number): number {
            if (i + 2 >= m)
                return cost[i];

            if (dp[i] === -1)
                dp[i] = cost[i] + Math.min(climb(i + 1), climb(i + 2));

            return dp[i];
        };

        return Math.min(climb(0), climb(1));
    }

    // 2. dp (bottom up)
    minCostClimbingStairs2(cost: number[]): number {
        const m: number = cost.length;
        const dp = new Array<number>(m + 1).fill(0);

        for (let i = 2; i <= m; ++i)
            dp[i] = Math.min(
                dp[i - 1] + cost[i - 1],
                dp[i - 2] + cost[i - 2]
            );

        return dp[m];
    }

    public static main(): void {
        // add cost for each staircase
        const cost: number[] = [
            1, 100, 1, 1, 1, 100, 1, 1, 100, 1
        ];

        // minima cost to climb to the top
        let ans1: number = new src746().minCostClimbingStairs(cost);
        let ans2: number = new src746().minCostClimbingStairs2(cost);
        console.log(ans1, ans2);
    }
}

src746.main();

// space-optimized sol at: https://neetcode.io/solutions/min-cost-climbing-stairs