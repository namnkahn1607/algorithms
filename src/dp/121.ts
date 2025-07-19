/* 121. best time to buy and sell stock */
// #: dp

class src121 {
    static maxProfit(prices: number[]): number {
        let profit = 0, buy = prices[0];

        for (const price of prices) {
            buy = Math.min(price, buy);

            profit = Math.max(price - buy);
        }

        return profit;
    }

    public static main(): void {
        // add prices
        const prices: number[] = [10, 1, 5, 6, 7, 1];

        // calculate maxima profit within one transaction
        let ans = src121.maxProfit(prices);
        console.log(ans);
    }
}

src121.main();