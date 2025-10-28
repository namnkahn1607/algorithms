/* 78b. subsets */
// @: backtrack + iteration

class B {
    subsets(nums: number[]): number[][] {
        const ans: number[][] = [[]];

        for (const num of nums) {
            const size = ans.length;

            for (let i = 0; i < size; ++i) {
                const subset = ans[i].slice();
                subset.push(num);
                ans.push(subset);
            }
        }

        return ans;
    }
}

export { B };