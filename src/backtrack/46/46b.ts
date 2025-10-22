/* 46b. permutations */
// @: iteration
import { Permutations } from "./run";

class B extends Permutations {
    permutes(nums: number[]): number[][] {
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
}

B.run(new B());