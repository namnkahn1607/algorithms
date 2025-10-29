/* 704b. binary search */
// @: recursion

class B {
    search(arr: number[], target: number): number {
        const rBS = (L: number, R: number): number => {
            if (L > R) return -1;

            const M = L + Math.trunc((R - L) / 2);

            if (arr[M] < target)
                return rBS(M + 1, R);
            else if (arr[M] > target)
                return rBS(L, M - 1);

            return M;
        };

        return rBS(0, arr.length - 1);
    }
}

export { B };