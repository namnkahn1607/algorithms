/* 90. subsets 2 */
// #: backtrack

class src90 {
    subsetsWithDup(nums: number[]): number[][] {
        nums.sort();

        const ans: number[][] = [];

        const dfs = function(i: number, subset: number[]): void {
            if (i >= nums.length) {
                ans.push([...subset]);
                return;
            }

            subset.push(nums[i]);
            dfs(i + 1, subset);

            subset.pop();

            while (i + 1 < nums.length && nums[i] === nums[i + 1])
                ++i;

            dfs(i + 1, subset);
        };

        dfs(0, []);

        return ans;
    }

    public static main(): void {
        // add array
        const arr: number[] = [1, 2, 2];

        // all possible subsets of array
        let ans: number[][] = new src90().subsetsWithDup(arr);

        console.log(ans.map(val => {
            return val.length === 0 ? "empty" : val.join(",");
        }).join("\n"));
    }
}

src90.main();

// more sols at: https://neetcode.io/solutions/subsets-ii