/* 704. binary search */
// #: bs
import { BS } from "../addons";

class src704 {
    // 1. iterative BS
    static search(arr: number[], target: number): number {
        return BS.iBS(arr, 0, arr.length - 1, target);
    }

    // 2. recursive BS
    private static rBS(arr: number[], l: number, r: number, target: number): number {
        if (l > r) return -1;

        const mid = l + Math.trunc((r - l) / 2);

        if (arr[mid] < target)
            return src704.rBS(arr, mid + 1, r, target);
        else if (arr[mid] > target)
            return src704.rBS(arr, l, mid - 1, target);
        else
            return mid;
    }

    static search2(arr: number[], target: number): number {
        return this.rBS(arr, 0, arr.length - 1, target);
    }

    public static main(): void {
        // add array
        const arr: number[] = [-1, 0, 2, 4, 6, 8];
        const target: number = 4;

        // search for target within the array
        let ans1: number = src704.search(arr, target),
            ans2: number = src704.search2(arr, target);

        console.log(`iterative: ${ans1}, recursive: ${ans2}`);
    }
}

src704.main();