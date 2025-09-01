/* 219. contains duplicate 2 */
// #: sliding window + hash

class src219 {
    containsNearbyDuplicate(arr: number[], k: number): boolean {
        const set = new Set<number>();
        let L = 0;

        for (let R = 0; R < arr.length; ++R) {
            set.add(arr[R]);

            if (set.size < R - L + 1)
                return true;

            if (R - L >= k)
                set.delete(arr[L++]);
        }

        return false;
    }

    public static main(): void {
        // add arr & k
        const arr: number[] = [1, 2, 3, 1, 2, 3];
        const k: number = 2;

        // check if duplicate within range k
        let ans = new src219().containsNearbyDuplicate(arr, k);
        console.log((ans) ? "true" : "false");
    }
}

src219.main();