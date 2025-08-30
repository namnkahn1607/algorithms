/* 189. rotate array */
// #: 2 pointers

class src189 {
    rotate(arr: number[], k: number): void {
        const reverseArray = function(l: number, r: number): void {
            while (l < r) {
                [arr[l], arr[r]] = [arr[r], arr[l]];
                ++l; --r
            }
        };

        const m: number = arr.length;
        k %= m;

        reverseArray(0, m - k - 1);
        reverseArray(m - k, m - 1);
        arr.reverse();
    }

    public static main(): void {
        // add array & steps
        const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
        const k: number = 3;

        // rotate right by k steps
        new src189().rotate(arr, k);
        console.log(arr.join(" "));
    }
}

src189.main();

// more sols at: https://neetcode.io/solutions/rotate-array