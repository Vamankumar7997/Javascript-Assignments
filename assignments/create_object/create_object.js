function CreateObject(arr) {
    let values = {}
    let res = 0
    while (res < arr.length) {
        let ans = arr[res]
        let obj = arr[res + 1]
        values[ans] = obj
        res = res + 2
    }
    return values
    // Write your code here
}

module.exports = CreateObject;
