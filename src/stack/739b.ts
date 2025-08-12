/* 739b. daily temperatures */
// #: 2 pointers + dp

class src739b {
    dailyTemperatures(tmps: number[]): number[] {
        const m: number = tmps.length;

        const ans = new Array<number>(m).fill(0);
        const stack = new Array<[number, number]>();

        for (let i = 0; i < m; ++i) {
            let len = stack.length;

            while (len > 0 && tmps[i] > stack[len - 1][0]) {
                ans[stack[len - 1][1]] = i - stack[len - 1][1];

                stack.pop();
                --len;
            }

            stack.push([tmps[i], i]);
        }

        return ans;
    }

    public static main(): void {
        // add temperatures
        const tmps: number[] = [30, 38, 30, 36, 35, 40, 28];

        // calculate wait time until warmer day
        let ans: number[] = new src739b().dailyTemperatures(tmps);
        console.log(ans.join(" "));
    }
}

src739b.main();