/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let hashSecret = {};
    for(let i=0; i< secret.length; i++){
        if(hashSecret.hasOwnProperty(secret[i])){
            hashSecret[secret[i]].push(i);
        }else{
            hashSecret[secret[i]] = [i];
        }
    }
    let bulls = 0, cows = 0,newArray = [];
    for(let i =0 ; i < guess.length; i++){
        if(hashSecret.hasOwnProperty(guess[i]) && hashSecret[guess[i]].length > 0){
            let index = hashSecret[guess[i]].indexOf(i);
            if(index !== -1){
                hashSecret[guess[i]].splice(index,1);
                bulls++;
            }
        }
        if(guess[i] !== secret[i]){
            newArray.push(guess[i]);
        }
    }
    for(let i =0 ; i < newArray.length; i++){
        if(hashSecret.hasOwnProperty(newArray[i]) && hashSecret[newArray[i]].length > 0){
            let index = hashSecret[newArray[i]].indexOf(i);
                hashSecret[newArray[i]].pop();
                cows++;
        }
    }
    return bulls + 'A' + cows + 'B';
};