/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = [];
    for (let i =0 ; i<= coins.length; i++){
        dp[i] = [];
    }
    for(let i = 0; i <=amount; i++){
        dp[0][i] = 0;
    }
    for(let i = 0; i<= coins.length; i++){
        dp[i][0] = 1;
    }
    for(let x = 1 ; x<= coins.length; x++){
        for(let y = 1; y<= amount; y++){
            let amount = y - coins[x-1];
            if(y - coins[x-1] >= 0 ){
                dp[x][y] = dp[x-1][y] + dp[x][amount];
            }else{
                dp[x][y] = dp[x-1][y];
            }
        }
    }
    return dp[coins.length][amount];
};


console.log(
You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

 

Example 1:

Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10] 
Output: 1
)