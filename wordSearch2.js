/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let dictionary = new Set(words);
    let result = new Set();
    function dfs(row, column, path, letter){
        if(row < 0 || row > board.length -1 || column < 0 || column > board[0].length - 1){
            return;
        }
        let currentPath = `${row}${column}`;
        if(path.includes(currentPath)){
            return;
        }
        let finalLetter = letter + board[row][column];
        
        if(dictionary.has(finalLetter)){
            result.add(finalLetter);
        }else{
            const isCloseWord = words.some(word => word.includes(finalLetter));
            if (!isCloseWord) return;
        }
        
        dfs(row + 1, column , [...path, currentPath], finalLetter);
        dfs(row - 1, column , [...path, currentPath], finalLetter);
        dfs(row , column + 1,[...path, currentPath], finalLetter );
        dfs(row , column - 1, [...path, currentPath], finalLetter);
    }
    
    for(let i =0; i< board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            dfs(i, j , [], '')
        }
    }
    return Array.from(result);
};