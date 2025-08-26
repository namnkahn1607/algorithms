/* 901. online stock span */
// #: stack

class StockSpanner {
    private readonly stack: [number, number][];

    constructor() {
        this.stack = new Array<[number, number]>();
    }

    next(price: number): number {
        let span = 1, len = this.stack.length;

        while (len > 0 && price >= this.stack[len - 1][0]) {
            span += this.stack[len - 1][1];
            this.stack.pop();
            --len;
        }

        this.stack.push([price, span]);

        return span;
    }

    public static main(): void {
        // add StockSpanner & prices
        const stock: StockSpanner = new StockSpanner();
        const prices: number[] = [100, 80, 60, 70, 60, 75, 85];

        // calculate span for each day price
        const ans: number[] = [];

        for (let i = 0; i < prices.length; ++i)
            ans.push(stock.next(prices[i]));

        console.log(ans.join(" "));
    }
}

StockSpanner.main();