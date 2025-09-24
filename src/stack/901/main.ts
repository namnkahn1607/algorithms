/* 901. online stock span */

export abstract class _StockSpanner {
    abstract next(price: number): number;

    public static run(stock: _StockSpanner): void {
        const prices: number[] = [100, 80, 60, 70, 60, 75, 85];

        const ans: number[] = [];

        for (let i = 0; i < prices.length; ++i)
            ans.push(stock.next(prices[i]));

        console.log(ans.join(" "));
    }
}