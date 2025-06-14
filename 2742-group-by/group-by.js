/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const map = {}

    for(let i = 0; i < this.length; i++){
        const key = fn(this[i])
        if(map[key] === undefined){
            map[key] = []
        }

        map[key].push(this[i])
    }

    return map
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */