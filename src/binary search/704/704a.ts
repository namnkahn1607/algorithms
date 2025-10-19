/* 704a. binary search */
// @: iteration
import { BinarySearch } from "./run";
import { BS } from "../BS";

class A extends BinarySearch {
    search(arr: number[], target: number): number {
        return BS.search(arr, 0, arr.length - 1, target);
    }
}

A.run(new A());