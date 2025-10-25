/* 41a. first missing positive */
// @: array

class A {
    firstMissingPositive(nums: number[]): number {
        const m = nums.length;

        for (let i = 0; i < m; ++i)
            nums[i] = (nums[i] < 0) ? 0 : nums[i];

        for (let i = 0; i < m; ++i) {
            const val = Math.abs(nums[i]);

            if (1 <= val && val <= m) {
                if (nums[val - 1] > 0)
                    nums[val - 1] *= -1;
                else if (nums[val - 1] === 0)
                    nums[val - 1] = -1 * (m + 1);
            }
        }

        for (let i = 1; i <= m; ++i) {
            if (nums[i - 1] >= 0)
                return i;
        }

        return m + 1;
    }
}

export { A };