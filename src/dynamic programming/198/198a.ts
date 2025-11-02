/* 198a. house robber */
// @: dp (bottom up)

class A {
    rob(nums: number[]): number {
        const m = nums.length;

        if (m === 0) return 0;
        if (m === 1) return nums[0];

        const dp = new Array(m).fill(0);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < m; ++i)
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);

        return dp[m - 1];
    }
}

export { A };