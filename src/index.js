exports.min = function min(array) {
    if (array == null || array == undefined || array.length == 0) {
        return 0;
    }
    let min = array[0];
    for (let element of array) {
        if (min > element) {
            min = element;
        }
    }
    return min;

}

exports.max = function max(array) {
    if (array == null || array == undefined || array.length == 0) {
        return 0;
    }
    let max = array[0];
    for (let element of array) {
        if (max < element) {
            max = element;
        }
    }
    return max;
}

exports.avg = function avg(array) {
    if (array == null || array == undefined || array.length == 0) {
        return 0;
    }
    let avg = 0;
    for (let element of array) {
        avg = element + avg;
    }
    avg = avg / array.length;
    return avg;
}
