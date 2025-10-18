/* 658. find k closest elements */

abstract class ClosestValues {
    abstract findClosestElements(arr: number[], k: number, x: number): number[];

    public static run(sol: ClosestValues): void {
        const arr: number[] = [0, 0, 0, 1, 3, 5, 6, 7, 8, 8];
        const k: number = 2;
        const x: number = 2;

        console.log(sol.findClosestElements(arr, k, x));
    }
}

export { ClosestValues };