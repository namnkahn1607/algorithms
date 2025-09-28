/* 167a. 2 integer sum 2 */
// @: 2 pointers
import { SumTwo } from "./main";

class A extends SumTwo {
    twoSum(arr: number[], target: number): number[] {
        let [L, R] = [0, arr.length - 1];

        while (L < R) {
            const sum = arr[L] + arr[R];

            if (sum < target)
                ++L;
            else if (sum > target)
                --R;
            else
                return [L + 1, R + 1];
        }

        return [];
    }
}

A.run(new A());