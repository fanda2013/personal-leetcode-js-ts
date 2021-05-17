/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        const prev = prices[i - 1]
        const curr = prices[i]

        if (curr > prev) profit += curr - prev
    }

    return profit
};
