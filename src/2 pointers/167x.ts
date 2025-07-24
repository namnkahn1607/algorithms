/* 167a. 2 integer sum II */
// #: 2 pointers

class src167a {
    static twoSum(arr: number[], target: number): number[] {
        let [l, r] = [0, arr.length - 1];

        while (l < r) {
            const sum: number = arr[l] + arr[r];

            if (sum < target)
                ++l;
            else if (sum > target)
                --r;
            else
                return [l + 1, r + 1];
        }

        return [];
    }

    public static main(): void {
        // add array & target
        const arr: number[] = [1, 2, 3, 4];
        const target: number = 3;

        // 2 values summing to target
        let ans: number[] = src167a.twoSum(arr, target);
        console.log(ans);
    }
}

src167a.main();

// more sols at: https://neetcode.io/solutions/two-sum-ii-input-array-is-sorted