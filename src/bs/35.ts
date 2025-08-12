/* 35. search insert position */
// #: bs
import { BS } from "../addons";

class src35 {
    searchInsert(arr: number[], target: number): number {
        return BS.lowerBS(arr, target);
    }

    public static main(): void {
        // add array & target
        const arr: number[] = [-1, 0, 2, 4, 6, 8];
        const target: number = 5;

        // search for insert pos
        let ans: number = new src35().searchInsert(arr, target);
        console.log(ans);
    }
}

src35.main();