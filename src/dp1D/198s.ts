/* 198. house robber */
// #: dp

class src198 {
    // 1. dp (top down)
    rob(nums: number[]): number {
        const m: number = nums.length;

        if (m <= 2) return Math.max(...nums);

        const dp = new Array<number>(m).fill(-1);

        const maxRob = function(i: number): number {
            if (i + 2 >= m) return nums[i];
            if (i === m - 3) return nums[i] + nums[i + 2];

            if (dp[i] === -1)
                dp[i] = nums[i] + Math.max(maxRob(i + 2), maxRob(i + 3));

            return dp[i];
        }

        return Math.max(maxRob(0), maxRob(1));
    }

    // 2. dp (bottom up + space optimized)
    rob2(nums: number[]): number {
        const m: number = nums.length;

        if (m === 1) return nums[0];

        for (let i = m - 3; i >= 0; --i) {
            if (i === m - 3)
                nums[i] += nums[i + 2];
            else
                nums[i] += Math.max(
                    nums[i + 2], nums[i + 3]
                );
        }

        return Math.max(nums[0], nums[1]);
    }

    public static main(): void {
        // add amount of money's
        const nums: number[] = [2, 7, 9, 3, 1];

        // calculate maxima robbed money
        let ans1: number = new src198().rob(nums);
        let ans2: number = new src198().rob2(nums);

        console.log(ans1, ans2);
    }
}

src198.main();

// space-optimized sol at: https://neetcode.io/solutions/house-robber