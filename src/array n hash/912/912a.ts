/* 912a. sort an array */
// @: mergesort
import { ArraySort } from "./run";

class MergeSort extends ArraySort {
    merge(arr: number[], L: number, M: number, R: number): void {
        const [size1, size2] = [M - L + 1, R - M];

        const arr1 = arr.slice(L, M + 1);
        const arr2 = arr.slice(M + 1, R + 1);

        let [i, j, k] = [0, 0, L];

        while (i < size1 && j < size2) {
            if (arr1[i] <= arr2[j]) {
                arr[k++] = arr1[i++];
            } else {
                arr[k++] = arr2[j++];
            }
        }

        while (i < size1) {
            arr[k++] = arr1[i++];
        }

        while (j < size2) {
            arr[k++] = arr2[j++];
        }
    }

    sort(arr: number[], L: number, R: number): void {
        if (L + 1 >= R) {
            if (L + 1 === R && arr[L] > arr[R])
                [arr[L], arr[R]] = [arr[R], arr[L]];
            
            return;
        }

        const M = L + Math.trunc((R - L) / 2);
        this.sort(arr, L, M);
        this.sort(arr, M + 1, R);
        this.merge(arr, L, M, R);
    }
}

MergeSort.run(new MergeSort());