/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunked = []
    let x = 0
    let y = size

    while(x < arr.length){
        chunked.push(arr.slice(x, y))
        x += size
        y += size
    }
    return chunked
};
