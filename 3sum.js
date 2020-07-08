/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort(function(a,b) {
                    return a - b;
                })
    for(let x = 0; x < nums.length; x++){
        if(x > 0 && nums[x] === nums[x-1]){
            continue;
        }
        let start = x + 1, end = nums.length - 1;
        while(start < end){
            if(end < nums.length - 1 && nums[end] === nums[end + 1]){
                end--;
                continue;
            }
            if(nums[x] + nums[start] + nums[end] === 0){
                let array = [];
                array.push(nums[x]);
                array.push(nums[start]);
                array.push(nums[end]);
                    result.push(array);
                start++; end--;
            }else if(nums[x] + nums[start] + nums[end] < 0){
                start++;
            }else if(nums[x] + nums[start] + nums[end] > 0){
                end--;
            }
        }
    }
    return result;
};
