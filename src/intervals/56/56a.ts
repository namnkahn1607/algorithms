/* 56a. merge intervals */
// @: sorting

class A {
    merge(intervals: number[][]): number[][] {
        intervals.sort(
            (a: number[], b: number[]) => a[0] - b[0]
        );

        const ans = [intervals[0]]

        for (const [start, end] of intervals) {
            const last = ans[ans.length - 1];

            if (start <= last[1]) {
                last[1] = Math.max(last[1], end);
            } else {
                ans.push([start, end]);
            }
        }

        return ans;
    }
}

export { A };