/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let partitions = [];
    let list = {};
    for(let i =0 ; i < S.length; i++){
            list[S[i]] = i
        
    }
    let anchor = 0, end = 0;
    for(let i =0 ; i < S.length; i++){
        end = Math.max(end, list[S[i]]);
        if(end === i){
            partitions.push(i - anchor + 1);
            anchor = i+1;
        }
    }
    return partitions;
};