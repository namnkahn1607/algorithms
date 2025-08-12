/* 122. best time to buy and sell stock II */
// #: 2 pointers

class src122 {
    maxProfit(prices: number[]): number {
        const m: number = prices.length;
        let [profit, buy] = [0, prices[0]];

        for (let i = 0; i < m - 1; ++i) {
            if (prices[i] > prices[i + 1]) {
                profit += (prices[i] - buy);
                buy = prices[i + 1];
            }
        }

        profit += (prices[m - 1] - buy);

        return profit;
    }

    public static main(): void {
        // add prices
        const prices: number[] = [7, 1, 5, 3, 6, 4];

        // calculate maxima profit gained
        let ans: number = new src122().maxProfit(prices);
        console.log(ans);
    }
}

src122.main();