/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    if(hour === 12) {
        hour = 0;
    }
    let minuteAngle = minutes*6;
    let hourAngle = hour*30 + minutes/2;
    let difference = Math.abs(hourAngle - minuteAngle);
    return Math.min(difference, 360 - difference);
};