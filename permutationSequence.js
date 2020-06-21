/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let array = [];
    for(let i = 1; i<= n; i++){
        array[i-1] = i;
    }
    var result = [];
    permutation(array, [], result, k);
    return result[k - 1];
    
};

var permutation = function(array, temp, result, k){
    var i, x;
        if(result.length >=k){
            return;
        }
        if (!array.length) {
            result.push(temp.join(''));
        }
        for (i = 0; i < array.length; i++) {
            if(result.length >=k){
                break;
            }
            x = array.splice(i, 1)[0];
            permutation(array, temp.concat(x), result, k);
            array.splice(i, 0, x);
        }
}