/* 560. subarray sum equals k */
// @: array + prefix/suffix
import { SubarraySumK } from "./main";

class A extends SubarraySumK {
    subarraySum(arr: number[], k: number): number {
        const map = new Map<number, number>([[0, 1]]);
        let [prefix, ans] = [0, 0];

        for (const x of arr) {
            prefix += x;

            if (map.has(prefix - k))
                ans += map.get(prefix - k)!;

            if (!map.has(prefix))
                map.set(prefix, 1);

            map.set(prefix, map.get(prefix)! + 1);
        }

        return ans;
    }
}

A.run(new A());