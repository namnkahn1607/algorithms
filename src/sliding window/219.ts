/* 219. contains duplicate II */
// #: sliding window

class src219 {
    containsNearbyDuplicate(arr: number[], k: number): boolean {
        const m: number = arr.length;
        const set = new Set<number>();
        let l = 0;

        for (let r = 0; r < m; ++r) {
            if (r - l > k)
                ++l;

            if (set.has(arr[r]))
                return true;

            set.add(arr[r]);
        }

        return false;
    }

    public static main(): void {
        // add array & k
        const arr: number[] = [1, 2, 3, 1];
        const k: number = 3;

        // check for duplication within range k
        let ans: boolean = new src219().containsNearbyDuplicate(arr, k);
        console.log((ans) ? "true" : "false");
    }
}

src219.main();