/* 912b. sort an array */
// @: quicksort - I

class Quicksort {
    partition(arr: number[], L: number, R: number): number {
        const swap = (i: number, j: number) => [arr[i], arr[j]] = [arr[j], arr[i]];
        const median = (): number => {
            const M = L + Math.trunc((R - L) / 2);

            if (arr[L] > arr[M]) swap(L, M);
            if (arr[L] > arr[R]) swap(L, R);
            if (arr[M] > arr[R]) swap(M, R);

            swap(L + 1, M);

            return arr[L + 1];
        };

        const pivot = median();
        let [i, j] = [L + 1, R];

        while (true) {
            while (true) {
                if (arr[++i] >= pivot)
                    break;
            }

            while (true) {
                if (arr[--j] <= pivot)
                    break;
            }

            if (i > j) break;
            swap(i, j);
        }

        swap(L + 1, j);
        return j;
    }

    sort(arr: number[], L: number, R: number): void {
        if (L + 1 >= R) {
            if (L + 1 === R && arr[L] > arr[R])
                [arr[L], arr[R]] = [arr[R], arr[L]];

            return;
        }

        const pivot = this.partition(arr, L, R);
        this.sort(arr, L, pivot - 1);
        this.sort(arr, pivot + 1, R);
    }
}

export { Quicksort };