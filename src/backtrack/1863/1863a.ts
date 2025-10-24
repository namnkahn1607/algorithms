/* 1863a. sum of all subsets XOR total */
// @: backtrack

class A {
    subsetXORSum(nums: number[]): number {
        let [ans, subXOR] = [0, 0];

        const dfs = (i: number) => {
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
}

export { A };