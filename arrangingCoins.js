/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let left = 0, right = n, count = 0;
    while(left <= right){
        let mid = parseInt((left+right)/2);
        let k = mid * (mid+1)/2;
        if(k === n){return mid;}
        
        if(n < k){
            right = mid - 1;
        }else{
            left = mid+1;
        }
    }
    return right;
    
};