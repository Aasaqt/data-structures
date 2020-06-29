/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(n + 1);
    for (let i = 0; i < dp.length; i += 1) {
        dp[i] = new Array(m + 1).fill(0);
    }
    dp[0][1] = 1;
    for(i = 1; i <= n; i++){
        for(let j = 1; j<= m; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[n][m];
};