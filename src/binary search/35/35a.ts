/* 35. search insert position */
// @: binary search
import { BS } from "../BS";

class A {
    searchInsert(arr: number[], target: number): number {
        return BS.lower(arr, 0, arr.length - 1, target);
    }
}

export { A };