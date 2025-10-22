/* 78. subsets */

abstract class Subsets {
    abstract subsets(nums: number[]): number[][];

    public static run(sol: Subsets): void {
        const nums: number[] = [1, 2, 3, 4];

        console.log(sol.subsets(nums).map(val => {
            return val.length === 0 ? "empty" : val.join(",");
        }).join(" "));
    }
}

export { Subsets };