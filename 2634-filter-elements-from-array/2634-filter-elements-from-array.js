/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr[idx] = arr[i];
            idx++;
        }
    }
    return filteredArr;
};