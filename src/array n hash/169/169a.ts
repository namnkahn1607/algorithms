/* 169a. majority element */
// @: Boyer-Moore
import { Majority } from "./run";

class A extends Majority {
    majorityElement(arr: number[]): number {
        let [candidate, cnt] = [arr[0], 0];

        for (const a of arr) {
            if (cnt === 0)
                candidate = a;

            cnt += (candidate === a) ? 1 : -1;
        }

        return candidate;
    }
}

A.run(new A());