function CreateObject(arr) {
    let obj = {}
    
    for (let i=0;i<arr.length;i+=2) {
        let key = arr[i]
        let value = arr[i+1]
        obj[key] = value
    }  
    return obj
        
    // Write your code here
}

module.exports = CreateObject;
