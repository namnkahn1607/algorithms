/* 704a. binary search */
// @: iteration
import { BS } from "../BS";

class A {
    search(arr: number[], target: number): number {
        return BS.search(arr, 0, arr.length - 1, target);
    }
}

export { A };