/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0], profit = 0

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i])
        profit = Math.max(profit, prices[i] - minPrice)
    }

    return profit
};
