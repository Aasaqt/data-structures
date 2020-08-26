/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dp = [];
    dp[0] = 0;
    for(let i = 1; i <= days.length; i++){
        var thisDay = days[i-1];
        let oneDay = costs[0] + findDpValue(dp, thisDay-1);
        let sevenDay = costs[1] + findDpValue(dp, thisDay-7);
        let thirtyDay = costs[2] + findDpValue(dp, thisDay - 30);
        dp[thisDay]= Math.min(oneDay, sevenDay, thirtyDay );
    }
    let lastDay =days[days.length - 1];
    return dp[lastDay];
};
function findDpValue(dp, day) {
  if(day<=0) {
    return 0;
  } else {
    while(dp[day] === undefined) day--;
    return dp[day];
  }
}