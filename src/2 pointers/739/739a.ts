/* 739a. daily temperatures */
// @: 2 pointers + dp

class A {
    dailyTemperatures(tmps: number[]): number[] {
        const m = tmps.length;
        const ans = new Array<number>(m).fill(0);

        for (let i = m - 2; i >= 0; --i) {
            let j = i + 1;

            while (j < m && tmps[j] <= tmps[i]) {
                if (ans[j] === 0) {
                    j = m;
                    break;
                }

                j += ans[j];
            }

            if (j !== m) {
                ans[i] = j - i;
            }
        }

        return ans;
    }
}

export { A };