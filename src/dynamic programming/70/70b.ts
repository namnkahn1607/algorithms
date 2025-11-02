/* 70b. climbing stairs */
// @: dp (bottom up)

class B {
    climbStairs(n: number): number {
        const dp = [1, 2];

        if (n <= 2)
            return n;

        for (let i = 2; i <= n; ++i)
            dp[i % 2] = dp[0] + dp[1];

        return dp[(n - 1) % 2];
    }
}

export { B };