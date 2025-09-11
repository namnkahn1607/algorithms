/* 1863. sum of all subsets XOR total */
// #: backtrack

class src1863 {
    subsetXORSum(nums: number[]): number {
        let [ans, subXOR] = [0, 0];

        const dfs = function(i : number): void {
            if (i === nums.length) {
                ans += subXOR;
                return;
            }

            subXOR ^= nums[i];
            dfs(i + 1);

            subXOR ^= nums[i];
            dfs(i + 1);
        };

        dfs(0);

        return ans;
    }

    public static main(): void {
        // add array
        const nums: number[] = [3, 4, 5, 6, 7, 8];

        // calculate XOR sum of every subset
        let ans: number = new src1863().subsetXORSum(nums);
        console.log(ans);
    }
}

src1863.main();

// more sols at: https://neetcode.io/solutions/sum-of-all-subset-xor-totals