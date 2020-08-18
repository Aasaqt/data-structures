/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let array = new Array(num_people).fill(0);
    let sum = 0, i =0, arraySum = 0;
    while((arraySum) !== candies){
        sum += 1;
        if((arraySum + sum) < candies){
            array[i] += sum;
            arraySum += sum;
        }else{
            array[i] += candies - arraySum;
            arraySum += candies - arraySum;
        }
        if(i === num_people - 1){
            i = 0;
        }else{
            i++;
        }
    }
    return array;
};