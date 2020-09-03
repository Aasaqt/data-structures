/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    // A = A.sort(function(a, b){
    //     return a-b;
    // })
    // if(parseInt(A.join('')) > 2359){
    //     return '';
    // }
    // let string = '', maxHour = 0;
    // for(let i = 0; i < A.length; i++){
    //     for(let j = 0; j < A.length; j++){
    //         if(parseInt(A[i].toString() + A[j].toString()) < 24 && i !== j){
    //             maxHour = Math.max(parseInt(A[i].toString() + A[j].toString()), maxHour);
    //         }
    //     }
    // }
    // let hourString = maxHour.toString();
    // if(maxHour.toString().length === 1){
    //     hourString = '0' + maxHour.toString();
    // }
    // string = hourString + ':';
    // let indexOffirst = 0;
    // for(let i =0 ; i < A.length; i++){
    //     if(A[i] === parseInt(hourString[0])){
    //         indexOffirst = i;
    //         break;
    //     }
    // }
    // A.splice(indexOffirst, 1);
    // let indexOfSecond = 0;
    // for(let i =0 ; i < A.length; i++){
    //     if(A[i] === parseInt(hourString[1])){
    //         indexOfSecond = i;
    //         break;
    //     }
    // }
    // A.splice(indexOfSecond, 1);
    // A = A.sort(function(a,b){
    //     return b - a;
    // })
    // let secondString = A.join('');
    // if(parseInt(secondString) > 59){
    //     secondString = secondString[1] + secondString[0];
    // }
    // if(parseInt(secondString) > 59){
    //     return '';
    // }else{
    //     string += secondString;
    //     return string;
    // }
    
    const count1 = new Array(10).fill(0);
    
    let res = "";

    for (const num of A) {
        count1[num]++;
    }
    
    for (let i = 23; i >= 0; i--) {
        let hour1 = Math.floor(i / 10);
        let hour2 = i % 10;
        
        for (let j = 59; j >= 0; j--) {
            let min1 = Math.floor(j / 10);
            let min2 = j % 10;
            
            if (isValid(hour1, hour2, min1, min2)) {
                  return `${hour1}${hour2}:${min1}${min2}`;
            }
        }
    }
    
    return "";
    
    
    function isValid(hour1, hour2, min1, min2) {
        const count2 = new Array(10).fill(0);
        
        count2[hour1]++;
        count2[hour2]++;
        count2[min1]++;
        count2[min2]++;
        
        for (let i = 0; i < count2.length; i++) {
            if (count2[i] > count1[i]) return false;
        }
        
        return true;
    }
};