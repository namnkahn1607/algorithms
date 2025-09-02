/* 70a. climbing stairs */
// #: dp

class src70a {
    // 1. dp (top down)
    climbStairs(n: number): number {
        const dp = new Map<number, number>();
        let ans = 0;

        const climb = function(n: number): number {
            if (n <= 2) return n;

            if (!dp.has(n))
                dp.set(n, climb(n - 1) + climb(n - 2));

            return dp.get(n)!;
        };

        ans += climb(n);

        return ans;
    }

    // 2. dp (bottom up)
    climbStairs2(n: number): number {
        const dp = [1, 2];

        if (n <= 2) return n;

        for (let i = 2; i <= n; ++i)
            dp[i % 2] = dp[0] + dp[1];

        return dp[(n - 1) % 2];
    }

    public static main(): void {
        // add staircase steps
        const n: number = 12;

        // calculate ways to climb to the top
        let ans1: number = new src70a().climbStairs(n);
        let ans2: number = new src70a().climbStairs2(n);
        console.log(ans1, ans2);
    }
}

src70a.main();

// more sols at: https://neetcode.io/solutions/climbing-stairs
// similar questions: 1137