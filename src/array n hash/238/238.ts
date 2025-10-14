/* 238. product of array except self */
// @: array + prefix/suffix
import { ProductExceptSelf } from "./run";

class A extends ProductExceptSelf {
    productExceptSelf(arr: number[]): number[] {
        const m = arr.length;
        const ans = new Array<number>(m).fill(1);
        let [prefix, suffix] = [1, 1];

        for (let i = 1; i < m; ++i) {
            prefix *= arr[i - 1];
            ans[i] *= prefix;
        }

        for (let i = m - 2; i >= 0; --i) {
            suffix *= arr[i + 1];
            ans[i] *= suffix;
        }

        return ans;
    }
}

A.run(new A());