/* 169. majority element */

abstract class Majority {
    abstract majorityElement(arr: number[]): number;

    public static run(sol: Majority): void {
        const arr: number[] = [2, 2, 1, 1, 1, 2, 2];
        console.log(sol.majorityElement(arr));
    }
}

export { Majority };