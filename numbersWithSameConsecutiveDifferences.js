/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
    let result = [];
    
    var compose = function(n){
        if(n.length === N){
            result.push(n);
        }else{
            let num = parseInt(n[n.length -1]);
            if((num - K) >= 0){
                compose(`${n}${num-K}`);
            }
            if((num + K) <= 9 && K > 0){
                compose(`${n}${num+K}`);
            }
        }
    }
    for(let i = 0; i < 10; i++){
        if(N > 1 && i === 0) continue;
        compose(`${i}`);
    }
    return result;
};



