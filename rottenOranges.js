/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let height = grid.length;
    let width = grid[0].length;
    let fresh =  0;
    let queue = []
    for(let i= 0; i<grid.length;i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 2){
                queue.push([i,j]);
            }else if(grid[i][j] === 1){
                fresh++;
            }
        }
    }
    let minute = 0;
    while(queue.length){
        let size = queue.length;
        for(let i =0 ;i < size; i++){
            const [x,y] = queue.shift();
            if(x - 1 >=0 && grid[x-1][y] === 1){
                grid[x-1][y] = 2;
                fresh--;
                queue.push([x-1,y]);
            }
            if(x+1 < height && grid[x+1][y] === 1){
                grid[x+1][y] = 2;
                fresh--;
                queue.push([x+1,y]);
            }
            if(y-1 >=0 && grid[x][y-1] === 1){
                grid[x][y-1] = 2;
                fresh--;
                queue.push([x,y-1]);
            }
            if(y+1 < width && grid[x][y+1] === 1){
                grid[x][y+1] = 2;
                fresh--;
                queue.push([x,y+1]);
            }
        }
        if(queue.length > 0 ){
            minute++;
        }
    }
    return fresh === 0 ? minute: -1;
};

