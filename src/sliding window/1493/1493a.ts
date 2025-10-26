/* 1493a. longest subarray of 1's after deleting 1 element */
// @: sliding window

class A {
    longestSubarray(nums: number[]): number {
        let [ans, zeroes] = [0, 0];
        let L = 0;

        for (let R = 0; R < nums.length; ++R) {
            if (nums[R] === 0)
                ++zeroes;

            while (L < R && zeroes > 1) {
                if (nums[L] === 0)
                    --zeroes;

                ++L;
            }

            ans = Math.max(ans, R - L);
        }

        return ans;
    }
}

export { A };