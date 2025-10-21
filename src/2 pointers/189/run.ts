/* 189. rotate array */

abstract class ArrayRotate {
    abstract rotate(arr: number[], k: number): void;

    public static run(sol: ArrayRotate): void {
        const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
        const k: number = 3;

        sol.rotate(arr, k);
        console.log(arr.join(" "));
    }
}

export { ArrayRotate };