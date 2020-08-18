/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let profit1 = new Array(n).fill(0);
    let profit2  = new Array(n).fill(0);
    let pMin = prices[0];
    for(let i = 1 ; i < prices.length; i++){
        pMin = Math.min(prices[i], pMin);
        profit1[i] = Math.max(profit1[i-1], prices[i] - pMin );
    }
    let pMax = prices[n-1];
    for(let i = n-2; i >= 0; i--){
        pMax = Math.max(prices[i], pMax);
        profit2[i] = Math.max(profit2[i+1], pMax - prices[i]);
    }
    let result = 0;
    for(let i = 0 ; i < n; i++){
        result = Math.max(profit1[i] + profit2[i], result);
    }
    return result;
};
