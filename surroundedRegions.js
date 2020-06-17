/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board.length==0){
        return ;
    }
    for(let y = 0; y< board[0].length; y++){
        markBoard(board, 0, y);
        markBoard(board, board.length - 1, y);
    }
    for(let x = 0; x< board.length; x++){
        markBoard(board, x, 0);
        markBoard(board, x,board[0].length - 1);
    }
    for(let x = 0; x < board.length; x++){
        for(let y = 0; y< board[x].length; y++){
            if(board[x][y] === 'O'){
                board[x][y] = 'X';
            }
            if(board[x][y] ==='1'){
                board[x][y] = 'O';
            }
        }
    }
};

var markBoard = function(board,x,y){
        if(x< 0 || x > board.length-1 || y < 0 || y> board[x].length - 1){
        return;
        }   
        if(board[x][y]=='O'){
            board[x][y] = "1";
        }
        else{
            return ;
        }
        markBoard(board,x-1,y);
        markBoard(board,x+1,y);
        markBoard(board,x,y-1);
        markBoard(board,x,y+1);
        return ;
}


console.log("
[["O","X","X","O","X"],["X","O","O","X","O"],["X","O","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]]
")