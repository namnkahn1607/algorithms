/* 75. sort colors */
// #: algorithms

class src75 {
    /* Dutch National Flag algorithm */
    static sortColors(colors: number[]): void {
        let l = 0, r = colors.length - 1, i = 0;

        while (i <= r) {
            if (colors[i] < 1) {
                [colors[i], colors[l]] = [colors[l], colors[i]];
                ++l; ++i;
            } else if (colors[i] > 1) {
                [colors[i], colors[r]] = [colors[r], colors[i]];
                --r;
            } else {
                ++i;
            }
        }
    }

    public static main(): void {
        // add colors
        const colors: number[] = [2, 0, 1, 0, 2, 2, 1, 0];

        // rearrange color in correct order
        src75.sortColors(colors);
        console.log(colors.join(" "));
    }
}

src75.main();