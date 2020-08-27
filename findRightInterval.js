/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    let intervalIndex = intervals.map((value,index) => {
        return [value[0], index];
    })
    intervalIndex = intervalIndex.sort(function(a,b) {
        if(a[0] !== b[0]){
            return a[0] - b[0];
        } else{
            return a[1] - b[1];
        }
    })
    let result = [];
    for(let i =0 ; i < intervals.length; i++){
        let index = intervalIndex.findIndex((value) => value[0] >= intervals[i][1]);
        if(index !== -1){
            result.push(intervalIndex[index][1]);
        }else{
            result.push(index);
        }
    }
    return result;
};