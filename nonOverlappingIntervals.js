/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length === 0){
        return 0;
    }
    intervals.sort(function(a,b) {
        return a[0] - b[0] || a[1] - b[1];
    })
    let result = 0, saveNext = intervals[0][1];
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] < saveNext) {
            result++;
            saveNext = Math.min(saveNext, intervals[i][1]);
        }else{
            saveNext = intervals[i][1];
        }
    }
    
    return result;
};