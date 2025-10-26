/* 219a. contains duplicate II */
// @: sliding window

class A {
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
}

export { A };