// accepts 2 arrays of varying lengths
/** first array consists of keys, second consists of values
 * returns an object created from the keys and values
 * if there aren't enough values, the rest of the keys should have a value of null
 * if there aren not enough keys, ignore the rest of the values
 */
function twoArrayObject(arr1, arr2, obj = {}, i = 0) {
    if (i >= arr1.length) return obj;

    if (i >= arr2.length) {
        obj[arr1[i]] = null;
        return twoArrayObject(arr1, arr2, obj, i + 1);
    } else {
        obj[arr1[i]] = arr2[i];
        return twoArrayObject(arr1, arr2, obj, i + 1);
    }
}
