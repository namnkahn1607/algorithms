/* 912d. sort an array */
// @: heapsort
import { ArraySort } from "./run";

class D extends ArraySort {
    sort(arr: number[], L: number, R: number): void {
        const heapify = (i: number, heapEnd: number) => {
            while (2 * i + 1 <= heapEnd) {
                const [l, r] = [2 * i + 1, 2 * i + 2];
                let max = l;

                if (r <= heapEnd && arr[r] > arr[max])
                    max = r;

                if (arr[i] < arr[max]) {
                    [arr[i], arr[max]] = [arr[max], arr[i]];
                    i = max;
                } else {
                    break;
                }
            }
        };

        for (let i = Math.floor((L + R) / 2); i >= L; --i)
            heapify(i, R);

        for (let i = R; i > L; --i) {
            [arr[i], arr[L]] = [arr[L], arr[i]];
            heapify(L, i - 1);
        }
    }
}

D.run(new D());