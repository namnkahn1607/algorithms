/* 216. combination sum III */

abstract class Combinations {
    abstract combinationSum3(k: number, n: number): number[][];

    public static run(sol: Combinations): void {
        const [k, n]: [number, number] = [3, 9];

        console.log(sol.combinationSum3(k, n).map(
            val => val.join(",")
        ).join(" "));
    }
}

export { Combinations };