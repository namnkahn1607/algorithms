/* 46a. permutations */
// @: optimal backtrack
import { Permutations } from "./run";

class A extends Permutations {
    permutes(nums: number[]): number[][] {
        if (nums.length === 0)
            return [[]];

        const perms = this.permutes(nums.slice(1));
        const ans: number[][] = [];

        for (const perm of perms) {
            const len = perm.length;
            const newPerm = perm.concat(nums[0]);

            ans.push(newPerm.slice());

            const swap = (i: number, j: number) =>
                [newPerm[i], newPerm[j]] = [newPerm[j], newPerm[i]];

            for (let i = 0; i < len; ++i) {
                swap(i, len);
                ans.push(newPerm.slice());
                swap(i, len);
            }
        }

        return ans;
    }
}

A.run(new A());