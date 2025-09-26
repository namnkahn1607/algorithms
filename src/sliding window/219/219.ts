/* 219. contains duplicate 2 */
// @: sliding window
import { ContainsDuplicate } from "./main";

class A extends ContainsDuplicate {
    containsNearbyDuplicate(arr: number[], k: number): boolean {
        const set = new Set<number>();
        let L = 0;

        for (let R = 0; R < arr.length; ++R) {
            set.add(arr[R]);

            if (set.size < R - L + 1)
                return true;

            if (R - L >= k)
                set.delete(arr[L++]);
        }

        return false;
    }
}

A.run(new A());