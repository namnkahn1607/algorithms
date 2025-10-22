/* 229b. majority elements II */
// @: Boyer-Moore + hash
import { MajorityII } from "./run";

class B extends MajorityII {
    majorityElement(nums: number[]): number[] {
        let cans = new Map<number, number>();

        for (const num of nums) {
            cans.set(num, (cans.get(num) ?? 0) + 1);

            if (cans.size <= 2)
                continue;

            let newCans = new Map<number, number>();

            for (const [can, cnt] of cans.entries()) {
                if (cnt > 1)
                    newCans.set(can, cnt - 1);
            }

            cans = newCans;
        }

        const ans: number[] = [];

        const count = (key: number): number => {
            let cnt = 0;

            for (const num of nums) {
                if (num === key) ++cnt;
            }

            return cnt;
        }

        for (const can of cans.keys()) {
            if (count(can) > Math.floor(nums.length / 3))
                ans.push(can);
        }

        return ans;
    }
}

B.run(new B());