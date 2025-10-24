/* 189a. rotate array */
// @: 2 pointers

class A {
    rotate(arr: number[], k: number): void {
        const reverse = (L: number, R: number) => {
            while (L < R) {
                [arr[L], arr[R]] = [arr[R], arr[L]];
                ++L; --R;
            }
        };

        const m: number = arr.length;
        k %= m;

        reverse(0, m - k - 1);
        reverse(m - k, m - 1);

        arr.reverse();
    }
}

export { A };