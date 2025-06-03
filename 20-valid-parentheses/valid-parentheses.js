/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const result = []
    const helper = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    for(let char of s){
        if(char in helper){
            const top = result.length > 0 ? result.pop() : '-'
            if(top !== helper[char]){
                return false
            }
        } else{
            result.push(char)
        }
    }

    return result.length === 0
    
};