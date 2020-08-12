/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let previousArray = [1];
    let result = [1];
    for(let i =1; i<= rowIndex; i++){
        for(let j = 0; j <= i; j++){
            if(j ==0 || j== i ){
                result[j] = 1;
            }else{
                result[j] = previousArray[j-1] + previousArray[j];
            }
        }
        previousArray = JSON.parse(JSON.stringify(result));
    }
    return result;
};