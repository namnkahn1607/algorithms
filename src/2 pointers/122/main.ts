/* 122. best time to buy and sell stocks 2 */

abstract class StockTrade {
    abstract maxProfit(prices: number[]): number;

    public static run(sol: StockTrade): void {
        const prices: number[] = [7, 1, 5, 3, 6, 4];
        console.log(sol.maxProfit(prices));
    }
}

export { StockTrade };