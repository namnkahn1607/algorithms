/* 1137b. n-th tribonacci */
// @: dp (bottom up)

class B {
    tribonacci(n: number): number {
        const dp = [0, 1, 1];

        if (n < 3) return dp[n];

        for (let i = 3; i <= n; ++i) {
            const [tmp1, tmp2] = [dp[1], dp[2]];
            dp[2] += (dp[0] + dp[1]);
            [dp[0], dp[1]] = [tmp1, tmp2];
        }

        return dp[2];
    }
}

export { B };