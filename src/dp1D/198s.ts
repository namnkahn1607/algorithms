/* 198. house robber */
// #: dp

class src198 {
    // 1. dp (top down)
    rob(nums: number[]): number {
        const m: number = nums.length;

        if (m <= 2)
            return Math.max(...nums);

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

    public static main(): void {
        // add amount of money's
        const nums: number[] = [2, 7, 9, 3, 1];

        // calculate maxima robbed money
        let ans: number = new src198().rob(nums);
        console.log(ans);
    }
}

src198.main();