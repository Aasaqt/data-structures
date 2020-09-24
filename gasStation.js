/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = gas.reduce((a,b) => a+b, 0);
    let totalCost = cost.reduce((a,b) => a+b, 0);
    if(totalGas - totalCost < 0){
        return -1;
    }
    let tank = 0, startpos = 0;
    for (let i = 0; i < gas.length; i++){    
        tank += (gas[i]-cost[i]);
        if (tank < 0){
            startpos = i+1;
            tank = 0;
        }
    }
    return startpos;
};