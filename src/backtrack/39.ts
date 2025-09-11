/* 39. combination sum */
// #: backtracking

class src39 {
    combinationSum(nums: number[], target: number): number[][] {
        nums.sort((a, b) => a - b);

        const ans: number[][] = [];
        const m: number = nums.length;

        const dfs = function(start: number, comb: number[], remain: number): void {
            if (remain === 0) {
                ans.push([...comb]);
                return;
            }

            for (let i = start; i < m; ++i) {
                if (remain - nums[i] < 0) break;

                comb.push(nums[i]);
                dfs(i, comb, remain - nums[i]);
                comb.pop();
            }
        };

        dfs(0, [], target);

        return ans;
    }

    public static main(): void {
        // add nums & target
        const nums: number[] = [2, 5, 6, 9];
        const target: number = 9;

        // all valid combinations sum to target
        let ans: number[][] = new src39().combinationSum(nums, target);

        console.log(ans.map(val => {
            return val.join(",")
        }).join(" "));
    }
}

src39.main();