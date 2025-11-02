/* 121a. best time to buy & sell stock */
// @: dp

class A {
    climbStairs(prices: number[]): number {
        let mn = prices[0];
        let profit = 0;

        for (let price of prices) {
            mn = Math.min(mn, price);

            profit = Math.max(profit, price - mn);
        }

        return profit;
    }
}

export { A };