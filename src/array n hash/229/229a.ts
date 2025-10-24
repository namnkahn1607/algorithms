/* 229a. majority elements II */
// @: Boyer-Moore
import { MajorityII } from "./run";

class A extends MajorityII {
    majorityElement(nums: number[]): number[] {
        let [can1, can2] = [NaN, NaN];
        let [cnt1, cnt2] = [0, 0];

        for (const num of nums) {
            if (num === can1) {
                ++cnt1;
            } else if (num === can2) {
                ++cnt2;
            } else if (cnt1 === 0) {
                can1 = num;
                cnt1 = 1;
            } else if (cnt2 === 0) {
                can2 = num;
                cnt2 = 1;
            } else {
                --cnt1;
                --cnt2;
            }
        }

        const ans: number[] = [];
        const m = nums.length;

        const count = (key: number): number => {
            return nums.reduce(
                (count, num) => num === key ? ++count : count, 0
            );
        }

        for (const can of [can1, can2]) {
            if (!isNaN(can) && count(can) > Math.floor(m / 3))
                ans.push(can);
        }

        return ans;
    }
}

A.run(new A());