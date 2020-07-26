/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num.toString().length !== 1){
        let number = num.toString().split('');
        let newNum = 0;
        for(let i =0 ; i< number.length; i++){
            newNum += parseInt(number[i]);
        }
        num = newNum;
    }
    return num;
};



/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return num == 0 ? 0 : 1 + (num - 1) % 9;
};