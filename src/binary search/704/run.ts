/* 704. binary search */

import { BS } from "../BS";

abstract class BinarySearch {
    abstract search(arr: number[], target: number): number;

    public static run(sol: BinarySearch): void {
        const arr: number[] = [-1, 0, 2, 4, 6, 8];
        const target: number = 4;

        console.log(sol.search(arr, target));
    }
}

export { BinarySearch };