/* 122a. best time to buy and sell stocks II */
// @: 2 pointers

class A {
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

export { A };