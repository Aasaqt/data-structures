/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let sum = 0;
    for(let i = s.length - 1; i >=0; i--){
        let power = s.length - 1 - i;
        sum += (parseInt(s.charCodeAt(i)) - 64)* Math.pow(26, power);
    }
    return sum;
};
