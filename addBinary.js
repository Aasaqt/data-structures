/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aLength = a.length - 1;
    let bLength = b.length - 1;
    let array = [];
    let carry = 0;
    while(aLength >= 0 || bLength >= 0){
        let sum = 0;
        if(aLength >= 0 && bLength >= 0){
            sum = parseInt(a[aLength]) + parseInt(b[bLength]) + carry;
        }else if(aLength <0 && bLength >= 0){
            sum = parseInt(b[bLength]) + carry;
        }else{
            sum = parseInt(a[aLength]) + carry;
        }
        
        if(sum == 3){
            array.push(1);
            carry = 1;
        }else if(sum === 2){
            array.push(0);
            carry = 1;
        }else if(sum === 1){
            array.push(1);
            carry = 0;
        }else{
            array.push(0);
            carry = 0;
        }
        aLength--;
        bLength--;
    }
    if(carry === 1){
        array.push(1);
    }
    return array.reverse().join('');
};
