/* 77. combinations */

abstract class Combinations {
    abstract combine(n: number, k: number): number[][];

    public static run(sol: Combinations): void {
        const [n, k]: [number, number] = [4, 2];

        console.log(sol.combine(n, k).map(
            val => val.join(",")
        ).join(" "));
    }
}

export { Combinations };