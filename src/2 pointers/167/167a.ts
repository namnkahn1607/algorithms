/* 167a. 2 integer sum II */
// @: 2 pointers

class A {
    twoSum(arr: number[], target: number): number[] {
        let [L, R] = [0, arr.length - 1];

        while (L < R) {
            const sum = arr[L] + arr[R];

            if (sum < target)
                ++L;
            else if (sum > target)
                --R;
            else
                return [L + 1, R + 1];
        }

        return [];
    }
}

export { A };