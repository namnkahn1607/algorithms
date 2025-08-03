/* algorithms by Kevin Wayne & Robert Sedgewick */
// #: dp

class Dragon {
    static dragonCurve(order: number, reverse: boolean): string {
        if (order === 0) return "F";

        return Dragon.dragonCurve(order - 1, false) +
            ((reverse) ? "R" : "L") +
            Dragon.dragonCurve(order - 1, true);
    }

    public static main(): void {
        // add level order
        const orders: number[] = [0, 1, 2, 3, 4, 5];

        // instruction to achieve that dragon curve
        for (const order of orders)
            console.log(Dragon.dragonCurve(order, false));
    }
}

Dragon.main();