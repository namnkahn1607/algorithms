/* 122. best time to buy and sell stocks 2 */
// @: 2 pointers
import { StockTrade } from "./run";

class A extends StockTrade {
    maxProfit(prices: number[]): number {
        const m = prices.length;
        let [profit, buy] = [0, prices[0]];

        for (let i = 0; i < m - 1; ++i) {
            if (prices[i] > prices[i + 1]) {
                profit += (prices[i] - buy);
                buy = prices[i + 1];
            }
        }

        return profit + prices[m - 1] - buy;
    }
}

A.run(new A());