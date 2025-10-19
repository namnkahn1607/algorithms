/* algorithms: Binary Search */

class BS {
    public static search(
        arr: number[], L: number, R: number, target: number
    ): number {
        while (L <= R) {
            const M = L + Math.trunc((R - L) / 2);

            if (arr[M] < target) {
                L = M + 1;
            } else if (arr[M] > target) {
                R = M - 1;
            } else {
                return M;
            }
        }

        return -1;
    }

    public static lower(
        arr: number[], L: number, R: number, target: number
    ): number {
        while (L < R) {
            const M = L + Math.trunc((R - L) / 2);

            if (arr[M] < target) {
                L = M + 1;
            } else {
                R = M;
            }
        }

        return L;
    }

    public static upper(
        arr: number[], L: number, R: number, target: number
    ): number {
        while (L < R) {
            const M = L + Math.trunc((R - L) / 2);

            if (arr[M] <= target) {
                L = M + 1;
            } else {
                R = M;
            }
        }

        return L;
    }
}

export { BS };