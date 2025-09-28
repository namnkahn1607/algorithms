/* 167. 2 integer sum 2 */

abstract class SumTwo {
    abstract twoSum(arr: number[], target: number): number[];

    public static run(sol: SumTwo): void {
        const arr: number[] = [1, 2, 3, 4];
        const target: number = 3;

        console.log(sol.twoSum(arr, target));
    }
}

export { SumTwo };