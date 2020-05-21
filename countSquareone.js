/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let count =0;
    let m = matrix.length, n = matrix[0].length;
    let dp = [];
    for(let i = 0; i < m; i++){
        dp[i] = [];
    }
    
    for(let i = 0; i < n; i++){
        dp[0][i] = matrix[0][i];
    }
    for(let i = 0; i < m; i++){
        dp[i][0] = matrix[i][0];
    }
    for(let x = 1; x< m; x++){
        for(let y = 1; y < n; y++){
            if(matrix[x][y] === 1){
                dp[x][y] = Math.min(dp[x][y-1], Math.min(dp[x-1][y], dp[x-1][y-1])) + 1;
            }else{
                dp[x][y] = 0;
            }
        }
    }
    for(let x= 0; x < m; x++){
        for(let y = 0; y < n; y++){
            count += dp[x][y];
        }
    }
    return count;
};
