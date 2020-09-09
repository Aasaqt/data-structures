/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1Array = version1.split('.').map(val => parseInt(val));
    let v2Array = version2.split('.').map(val => parseInt(val));
    if(v1Array.length > v2Array.length){
        let num = v1Array.length - v2Array.length;
        for(let i = 0; i < num; i++){
            v2Array.push(0);
        }
    }
    if(v2Array.length > v1Array.length){
        let num = v2Array.length - v1Array.length
        for(let i = 0; i < num; i++){
            v1Array.push(0);
        }
    }
    for(let i = 0; i < v1Array.length; i++){
        if(v1Array[i] > v2Array[i]){
            return 1;
        }else if(v1Array[i] < v2Array[i]){
            return -1;
        }
    }
    return 0;
};