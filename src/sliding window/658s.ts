/* 658. find k closest element */
// #: sliding window

class src658a {
    findClosestElements(arr: number[], k: number, x: number): number[] {
        let L = 0;

        for (let R = k - 1; R < arr.length; ++R) {
            const left = Math.abs(arr[L] - x);
            const right = Math.abs(arr[R] - x);

            if (right < left)
                L = R - k + 1;
        }

        return arr.slice(L, L + k);
    }

    public static main(): void {
        // add sorted array
        const arr: number[] = [0, 0, 0, 1, 3, 5, 6, 7, 8, 8];
        const [k, x]: [number, number] = [2, 2];

        // find k closest values to x
        let ans: number[] = new src658a().findClosestElements(arr, k, x);
        console.log(ans.join(" "));
    }
}

src658a.main();

// more sols at: https://neetcode.io/solutions/find-k-closest-elements