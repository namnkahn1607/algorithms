/* 78. subsets */
// #: backtrack

class src78 {
    // 1. recursion
    subsets(nums: number[]): number[][] {
        const ans: number[][] = [];
        const subset: number[] = [];

        const dfs = function(i: number): void {
            if (i >= nums.length) {
                ans.push([...subset]);
                return;
            }

            subset.push(nums[i]);
            dfs(i + 1);

            subset.pop();
            dfs(i + 1);
        };

        dfs(0);

        return ans;
    }

    // 2. iteration
    subsets2(nums: number[]): number[][] {
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

    public static main(): void {
        // add array
        const nums: number[] = [1, 2, 3];

        // all possible subsets of array
        let ans1: number[][] = new src78().subsets(nums);

        console.log(ans1.map(val => {
            return val.length === 0 ? "empty" : val.join(",");
        }).join("\n"));

        let ans2: number[][] = new src78().subsets2(nums);

        console.log(ans2.map(val => {
            return val.length === 0 ? "empty" : val.join(",");
        }).join("\n"));
    }
}

src78.main();

// more sols at: https://neetcode.io/solutions/subsets