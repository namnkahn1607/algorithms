/* 26. remove duplicates from sorted array */
// #: 2 pointers

class src26 {
    removeDuplicates(arr: number[]): number {
        const m: number = arr.length;
        let left = 1;

        for (let i = 1; i < m; ++i) {
            if (arr[i] !== arr[i - 1])
                arr[left++] = arr[i];
        }

        return left;
    }

    public static main(): void {
        // add array
        const arr: number[] = [2, 10, 10, 40, 40, 40];

        // gathers non-duplicates to the left
        let left: number = new src26().removeDuplicates(arr);
        const ans: number[] = [];

        for (let i = 0; i < left; ++i)
            ans.push(arr[i]);

        console.log(ans.join(" "));
    }
}

src26.main();