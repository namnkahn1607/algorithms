/* 238. product of array except self */

export abstract class ProductExceptSelf {
    abstract productExceptSelf(arr: number[]): number[];

    public static run(sol: ProductExceptSelf): void {
        const arr: number[] = [-1, 0, 1, 2, 3];
        console.log(sol.productExceptSelf(arr).join(" "));
    }
}