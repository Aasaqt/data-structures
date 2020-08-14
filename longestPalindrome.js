/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hash = {};
    for (let i = 0; i < s.length; i++){
        if(hash[s[i]]){
            hash[s[i]] += 1;
        }else{
            hash[s[i]] = 1
        }
    }
    let result = 0, singleValue = 0;
    Object.keys(hash).map(value => {
        if(hash[value] % 2 === 0){
            result += hash[value];
        }else {
            result += hash[value] - 1;
            singleValue++
        }
    })
    if(singleValue > 0){
        result++;
    }
    return result;
};