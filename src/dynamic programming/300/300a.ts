/* 300a. longest increasing subsequence */
// @: dp (bottom up)

class A {
    lengthOfLIS(nums: number[]): number {
        const N = nums.length;
        const dp = new Array<number>(N);
        dp[0] = 1;

        let ans = 1;

        for (let i = 1; i < N; ++i) {
            let mx = 0;

            for (let j = 0; j < i; ++j) {
                if (nums[j] < nums[i] && dp[j] > mx)
                    mx = dp[j];
            }

            dp[i] = 1 + mx;
            ans = Math.max(ans, dp[i]);
        }

        return ans;
    }
}

export { A };