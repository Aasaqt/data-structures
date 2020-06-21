/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let dp = []
    for(let i=0;i<=dungeon.length;i++){
        dp[i] = []
        for(let j=0;j<=dungeon[0].length;j++){
            dp[i][j] = Number.MAX_SAFE_INTEGER
        }
    }
    dp[dungeon.length-1][dungeon[0].length] = 1
    dp[dungeon.length][dungeon[0].length-1] = 1
    
    for(let i=dungeon.length-1;i>=0;i--){
        for(let j=dungeon[0].length-1;j>=0;j--){
            dp[i][j] = Math.max(1,Math.min(dp[i+1][j],dp[i][j+1])-dungeon[i][j])
        }
    }
    return dp[0][0]
};