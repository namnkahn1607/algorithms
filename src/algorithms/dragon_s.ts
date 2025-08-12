/* algorithms by Kevin Wayne & Robert Sedgewick */
// #: dp

class Dragon {
    dragonCurve(order: number, reverse: boolean): string {
        if (order === 0) return "F";

        return this.dragonCurve(order - 1, false) +
            ((reverse) ? "R" : "L") +
            this.dragonCurve(order - 1, true);
    }

    public static main(): void {
        // add level order
        const orders: number[] = [0, 1, 2, 3, 4, 5];

        // instruction to achieve that dragon curve
        for (const order of orders)
            console.log(new Dragon().dragonCurve(order, false));
    }
}

Dragon.main();