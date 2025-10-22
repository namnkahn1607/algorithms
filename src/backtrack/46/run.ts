/* 46. permutations */

abstract class Permutations {
    abstract permutes(nums: number[]): number[][];

    public static run(sol: Permutations): void {
        const nums: number[] = [1, 2, 3];

        console.log(sol.permutes(nums).map(
            val => val.join(",")
        ).join(" "));
    }
}

export { Permutations };