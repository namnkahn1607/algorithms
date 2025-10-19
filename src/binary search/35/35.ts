/* 35. search insert position */
// @: binary search
import { SearchInsert } from "./run";
import { BS } from "../BS";

class A extends SearchInsert {
    searchInsert(arr: number[], target: number): number {
        return BS.lower(arr, 0, arr.length - 1, target);
    }
}

A.run(new A());