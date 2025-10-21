/* 189a. rotate array */
// @: 2 pointers
import { ArrayRotate } from "./run";

class A extends ArrayRotate {
    rotate(arr: number[], k: number): void {
        const reverse = (L: number, R: number) => {
            while (L < R) {
                [arr[L], arr[L]] = [arr[R], arr[L]];
                ++L; --R;
            }
        };

        const m: number = arr.length;
        k %= m;

        reverse(0, m - k - 1);
        reverse(m - k, m - 1);

        arr.reverse();
    }
}

A.run(new A());