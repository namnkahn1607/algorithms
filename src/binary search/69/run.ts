/* 69. sqrt(x) */

abstract class SquareRoot {
    abstract mySqrt(x: number): number;

    public static run(sol: SquareRoot): void {
        const num: number = 2;

        console.log(sol.mySqrt(num));
    }
}

export { SquareRoot };