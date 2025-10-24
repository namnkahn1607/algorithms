/* 739b. daily temperatures */
// @: stack
import { Stack } from "datastructures-js";

class B {
    dailyTemperatures(tmps: number[]): number[] {
        const m = tmps.length;

        const ans = new Array<number>(m).fill(0);
        const stack = new Stack<[number, number]>()

        for (let i = 0; i < m; ++i) {
            let len = stack.size();

            while (len > 0 && tmps[i] > stack.peek()![0]) {
                const peek = stack.pop()!;
                ans[peek[1]] = i - peek[1];
                --len;
            }

            stack.push([tmps[i], i]);
        }

        return ans;
    }
}

export { B };