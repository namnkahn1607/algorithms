/* 75. sort colors */
// @: Dutch National Flag

class A {
    sortColors(colors: number[]): void {
        const swap = (i: number, j: number) => {
            const tmp = colors[i];
            colors[i] = colors[j];
            colors[j] = tmp;
        };

        let [L, R] = [0, colors.length - 1];
        let i = 0;

        while (i <= R) {
            switch (colors[i]) {
                case 0: swap(L++, i++); break;
                case 2: swap(R--, i); break;
                case 1: ++i; break;
            }
        }
    }
}

export { A };