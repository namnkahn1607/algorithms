/* 56c. merge intervals */
// @: greedy

class C {
    merge(intervals: number[][]): number[][] {
        let maxStart = -1;

        for (const [start, _] of intervals)
            maxStart = Math.max(maxStart, start);

        const mp = new Array<number>(maxStart + 1).fill(0);

        for (const [start, end] of intervals)
            mp[start] = Math.max(end + 1, mp[start]);

        const ans: number[][] = [];
        let have = -1;
        let intervalStart = -1;

        for (let i = 0; i < mp.length; ++i) {
            if (mp[i] !== 0) {
                if (intervalStart === -1)
                    intervalStart = i;

                have = Math.max(have, mp[i] - 1);
            }

            if (have === i) {
                ans.push([intervalStart, have]);
                have = -1;
                intervalStart = -1;
            }
        }

        if (intervalStart !== -1)
            ans.push([intervalStart, have]);

        return ans;
    }
}

export { C };