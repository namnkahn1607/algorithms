/* 1137c. n-th tribonacci number */
// @: dp (space-optimized)

class C {
    tribonacci(n: number): number {
        const dp = [0, 1, 1];

        if (n < 3) return dp[n];

        for (let i = 3; i <= n; ++i) {
            dp[i % 3] = dp[0] + dp[1] + dp[2];
        }

        return dp[n % 3];
    }
}

export { C };