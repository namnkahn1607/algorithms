/* 75. sort colors */

abstract class ColorOrder {
    abstract sortColors(colors: number[]): void;

    public static run(sol: ColorOrder): void {
        const colors: number[] = [2, 0, 1, 0, 2, 2, 2, 1, 0];

        sol.sortColors(colors);
        console.log(colors.join(" "));
    }
}

export { ColorOrder };