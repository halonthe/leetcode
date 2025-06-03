/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const helper = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let result = 0
    for(let i = 0; i < s.length; i++){
        let current = helper[s[i]]
        let next = helper[s[i + 1]]

        if(next > current){
            result += (next - current)
            i++;
        }else{
            result += current
        }  
    }

    return result

};