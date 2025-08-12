/* 739a. daily temperatures */
// #: 2 pointers + dp

class src739a {
    dailyTemperatures(tmps: number[]): number[] {
        const m: number = tmps.length;
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

            if (j !== m)
                ans[i] = j - i;
        }

        return ans;
    }

    public static main(): void {
        // add temperatures
        const tmps: number[] = [30, 38, 30, 36, 35, 40, 28];

        // calculate wait time until warmer day
        let ans: number[] = new src739a().dailyTemperatures(tmps);
        console.log(ans.join(" "));
    }
}

src739a.main();