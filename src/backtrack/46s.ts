/* 46. permutations */
// #: backtracking

class src46 {
    // 1. optimal backtrack - O(n.n!) time
    permute(nums: number[]): number[][] {
        if (nums.length === 0)
            return [[]];

        const perms: number[][] = this.permute(nums.slice(1));
        const ans: number[][] = [];

        for (const perm of perms) {
            const len = perm.length;
            const newPerm = [...perm, nums[0]];

            ans.push([...newPerm]);

            for (let i = 0; i < len; ++i) {
                [newPerm[i], newPerm[len]] = [newPerm[len], newPerm[i]];
                ans.push([...newPerm]);
                [newPerm[i], newPerm[len]] = [newPerm[len], newPerm[i]];
            }
        }

        return ans;
    }

    // 2. iteration - O(n^2.n!) time
    permute2(nums: number[]): number[][] {
        let ans: number[][] = [[]];

        for (const num of nums) {
            const newAns: number[][] = [];

            for (const perm of ans) {
                for (let i = 0; i <= perm.length; ++i) {
                    const newPerm = perm.slice();
                    newPerm.splice(i, 0, num);
                    newAns.push(newPerm);
                }
            }

            ans = newAns;
        }

        return ans;
    }

    public static main(): void {
        // add array
        const nums: number[] = [1, 2, 3];

        // all permutations of nums
        let ans1: number[][] = new src46().permute(nums);

        console.log(ans1.map(val => {
            return val.join(",");
        }).join(" "));

        let ans2: number[][] = new src46().permute2(nums);

        console.log(ans2.map(val => {
            return val.join(",");
        }).join(" "));
    }
}

src46.main();

// bitmask & optimal backtrack: https://neetcode.io/solutions/permutations