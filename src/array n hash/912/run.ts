/* 912. sort an array */

abstract class ArraySort {
    abstract sort(arr: number[], L: number, R: number): void;

    public static run(sol: ArraySort): void {
        const arr: number[] = [18, 19, 33, 20, 19, 12, 8, 24, 14, 14];

        sol.sort(arr, 0, arr.length - 1);
        console.log(arr.join(" "));
    }
}

export { ArraySort };