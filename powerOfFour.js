/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num === 1){
            return true;
        }
    if(num%4 !==0){
        return false;
    }else{
        while(num >= 4){
            num = num/4;
            if(num === 1){
                return true;
            }
        }
        return false;
    }
    
};