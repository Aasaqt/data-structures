/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let max = 0;
    for(let x = 0; x < grid.length; x++){
        for(let y = 0; y < grid[x].length;y++ ){
            if(grid[x][y]){
                max += (4 - dfs(grid, x, y));
            }
        }
    }
    return max;
};

var dfs = function(grid, x, y){
    let count = 0;
    if(x > 0 && grid[x-1][y]){
        count++;
    }
    if(y > 0 && grid[x][y-1]){
        count++;
    }
    if(x < grid.length - 1 && grid[x+1][y]){
        count++;
    }
    if(y < grid[0].length - 1 && grid[x][y+1]){
        count++
    }
    return count;
}
