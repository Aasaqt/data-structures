/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let hash = {};
    let result = [];
    for(let i = 0;i < tickets.length; i++){
        let a  = tickets[i][0];
        let b = tickets[i][1];
        if(hash.hasOwnProperty(a)){
            hash[a].push(b);
        }else{
            hash[a] = [b];
        }
    }
    Object.values(hash).forEach((to) => {
        to.sort();
    });
    
    function dfs(key){
        const tos = hash[key];
        while(tos && tos.length > 0) {
            dfs(tos.shift());
        }
        result.unshift(key);
    }
    dfs('JFK');
    return result;
};