/* 658a. find k closest elements */
// @: sliding window

class A {
    findClosestElements(arr: number[], k: number, x: number): number[] {
        let L = 0;

        for (let R = k - 1; R < arr.length; ++R) {
            const left = Math.abs(arr[L] - x);
            const right = Math.abs(arr[R] - x);

            if (right < left) {
                L = R - k + 1;
            }
        }

        return arr.slice(L, L + k);
    }
}

export { A };