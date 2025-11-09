/* 300b. longest increasing subsequence */
// @: dp + binary search (AMAZED - claps!)

class B {
    lengthOfLIS(nums: number[]): number {
        const tails: number[] = [];

        for (const num of nums) {
            let [L, R] = [0, tails.length];

            while (L < R) {
                const M = Math.floor((L + R) / 2);

                if (tails[M] < num)
                    L = M + 1;
                else
                    R = M;
            }

            if (L === tails.length)
                tails.push(num);
            else
                tails[L] = num;
        }

        return tails.length;
    }
}

export { B };