/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    var isVowel = function(char){
        return /[aeiou]/.test(char);
    }
    let output = '';
    let array = S.split(' ');
    for(let i = 0; i < array.length; i++){
        let word= array[i];
        if(isVowel(word[0].toLowerCase())){
            output += word + 'ma' + 'a'.repeat(i+1);
        }else{
            let lastCharacter = word.slice(0,1);
            output += word.slice(1, word.length) + lastCharacter + 'ma' +'a'.repeat(i+1);
        }
        
        if(i !== array.length - 1){
            output += ' ';
        }
    }
    return output;
    
};