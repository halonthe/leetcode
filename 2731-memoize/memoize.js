/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map() //Tempat menyimpan hasil (cache)

    return function(...args) {
        const key = JSON.stringify(args) //Buat kunci unik dari argumen

        if(cache.has(key)){
            return cache.get(key) //Ambil dari cache kalau sudah pernah dicall
        }

        const value = fn(...args) //Hitung hasil baru
        cache.set(key, value) //Simpan ke cache
        return value //Kembalikan hasilnya
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */