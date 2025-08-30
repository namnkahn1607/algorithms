/* 560. subarray sum equals k */
// #: array + prefix/suffix

class src560 {
    subarraySum(arr: number[], k: number): number {
        const map = new Map<number, number>([[0, 1]]);
        let prefix = 0, ans = 0;

        for (const x of arr) {
            prefix += x;
            
            ans += (map.get(prefix - k) ?? 0);

            map.set(prefix, (map.get(prefix) ?? 0) + 1);
        }

        return ans;
    }

    public static main(): void {
        // add array & k
        const arr: number[] = [10, 5, 3, -2];
        const k: number = 8;

        // calculate number of satisfied subarray
        let ans: number = new src560().subarraySum(arr, k);
        console.log(ans);
    }
}

src560.main();