/* 78a. subsets */
// @: backtrack + recursion

class A {
    subsets(nums: number[]): number[][] {
        const ans: number[][] = [];

        const dfs = (i: number, subset: number[]) => {
            if (i >= nums.length) {
                ans.push(subset.slice());
                return;
            }

            subset.push(nums[i]);
            dfs(i + 1, subset);

            subset.pop();
            dfs(i + 1, subset);
        };

        dfs(0, []);

        return ans;
    }
}

export { A };