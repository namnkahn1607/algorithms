/* 39. combination sum */

abstract class CombinationSum {
    abstract combinationSum(nums: number[], target: number): number[][];

    public static run(sol: CombinationSum): void {
        const nums: number[] = [2, 5, 6, 9];
        const target: number = 9;

        console.log(sol.combinationSum(nums, target).map(
            val => val.join(",")
        ).join(" "));
    }
}

export { CombinationSum };