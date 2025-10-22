/* 40. combination sum II */

abstract class CombinationSum {
    abstract combinationSum2(candidates: number[], target: number): number[][];

    public static run(sol: CombinationSum): void {
        const candidates: number[] = [9, 2, 2, 4, 6, 1, 5];
        const target: number = 8;

        console.log(sol.combinationSum2(candidates, target).map(
            val => val.join(",")
        ).join(" "));
    }
}

export { CombinationSum };