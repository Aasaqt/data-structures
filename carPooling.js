/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let list = [];
    for(let i = 0; i < trips.length; i++){
        list.push([trips[i][1], trips[i][0]]);
        list.push([trips[i][2], -trips[i][0]]);
    }
    list = list.sort(function(a,b){
        return a[0] - b[0] || a[1] - b[1];
    })
    for(let i =0 ; i< list.length; i++){
        capacity -= list[i][1];
        if(capacity < 0){
            return false;
        }
    }
    return true;
};