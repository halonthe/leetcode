/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init
    return{
        increment: function(){
            return ++counter
        },
        reset: function(){
            return counter = init
        },
        decrement: function(){
            return --counter
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */