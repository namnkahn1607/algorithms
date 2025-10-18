/* 912c. sort an array (not 2 submit) */
// @: quicksort - II
import { ArraySort } from "./run";

class C extends ArraySort {
    sort(arr: number[], L: number, R: number) {
        const swap = (i: number, j: number) =>
            [arr[i], arr[j]] = [arr[j], arr[i]];

        if (L + 1 >= R) {
            if (L + 1 === R && arr[L] > arr[R])
                swap(L, R);

            return;
        }

        const median = (): number => {
            const M = L + Math.trunc((R - L) / 2);

            if (arr[L] > arr[M]) swap(L, M);
            if (arr[L] > arr[R]) swap(L, R);
            if (arr[M] > arr[R]) swap(M, R);

            swap(L, M);
            return arr[L];
        };

        const pivot = median();
        let [lt, gt] = [L, R];
        let i = L;

        while (i <= gt) {
            if (arr[i] < pivot)
                swap(lt++, i++);
            else if (arr[i] > pivot)
                swap(i, gt--);
            else
                ++i;
        }

        this.sort(arr, L, lt - 1);
        this.sort(arr, gt + 1, R);
    }
}

C.run(new C());