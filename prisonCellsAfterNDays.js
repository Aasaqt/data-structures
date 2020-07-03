/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    var nextDay = function(cells){
        let nextPrison = '';
        for(let i = 0; i < cells.length; i++){
            if(cells[i-1] === cells[i+1]){
                nextPrison += '1';
            }else{
                nextPrison += '0'
            }
        }
        return nextPrison;
    }
    let prison = [...cells].join('');
    let history = [];
    while(N--){
        prison = nextDay(prison);
        let lookUp = history.indexOf(prison); 
        if (lookUp!=-1) {
            let mod = N%(history.length - lookUp); 
            return history[lookUp + mod].split('');
        }
        history.push(prison);
    }
    return prison.split('');
};