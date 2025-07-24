/* 912. sort an array */
// #: algorithms + array

class MergeSort {
    private static merge(arr: number[], low: number, mid: number, high: number): void {
        const [a, b] = [mid - low + 1, high - mid];

        const left: number[] = new Array<number>(a);
        const right: number[] = new Array<number>(b);

        for (let i = 0; i < a; ++i)
            left[i] = arr[low + i];

        for (let j = 0; j < b; ++j)
            right[j] = arr[mid + 1 + j];
        
        let [i, j, k] = [0, 0, low];

        while (i < a && j < b) {
            if (left[i] <= right[j])
                arr[k++] = left[i++];
            else
                arr[k++] = right[j++];
        }

        while (i < a)
            arr[k++] = left[i++];

        while (j < b)
            arr[k++] = right[j++];
    }

    public static sort(arr: number[], low: number, high: number): void {
        if (low >= high)
            return;

        const mid: number = low + Math.trunc((high - low) / 2);

        this.sort(arr, low, mid);
        this.sort(arr, mid + 1, high);

        this.merge(arr, low, mid, high);
    }
}

class src912 {
    private static createArray(bound: number): number[] {
        const arr: number[] = new Array<number>(bound);

        for (let i = 0; i < bound; ++i)
            arr[i] = Math.trunc(bound * Math.random());

        return arr;
    }

    public static main(): void {
        // add array
        const nums1: number[] = src912.createArray(12);

        // sort the array
        MergeSort.sort(nums1, 0, nums1.length - 1);
        console.log(nums1.join(" "));
    }
}

src912.main();