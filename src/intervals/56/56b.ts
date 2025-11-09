/* 56b. merge intervals */
// @: sweep line

class B {
    merge(intervals: number[][]): number[][] {
        const map = new Map<number, number>();

        for (const [start, end] of intervals) {
            map.set(start, (map.get(start) ?? 0) + 1);
            map.set(end, (map.get(end) ?? 0) - 1);
        }

        const ans: number[][] = [];
        const sortedKeys = Array.from(map.keys()).sort(
            (a, b) => a - b
        );
        let interval = [];
        let have = 0;

        for (const i of sortedKeys) {
            if (interval.length === 0)
                interval.push(i);

            have += map.get(i)!;

            if (have === 0) {
                interval.push(i);
                ans.push(interval);
                interval = [];
            }
        }

        return ans;
    }
}

export { B };