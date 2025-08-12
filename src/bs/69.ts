/* 69. sqrt(x) */
// #: bs

class src69 {
    mySqrt(x: number): number {
        let [low, high] = [0, x];

        while (low < high) {
            const mid = low + Math.trunc((high - low) / 2);

            if (mid * mid < x)
                low = mid + 1;
            else
                high = mid;
        }

        return (low * low === x) ? low : low - 1;
    }

    public static main(): void {
        // add number
        const num: number = 2;

        // calculate square root of number
        let ans: number = new src69().mySqrt(num);
        console.log(ans);
    }
}

src69.main();