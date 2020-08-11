/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort(function(a,b) {
        return a -b;
    })
    let left = 0, right = citations.length - 1;
    while(left <= right){
        let mid = parseInt((left+right)/2);
        if(citations[mid] >= citations.length - mid){
            right = mid -1;
        }else{
            left = mid+1;
        }
    }
    return citations.length - left;
};
