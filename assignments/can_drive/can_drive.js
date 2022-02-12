function CanDrive(hasDrivingLiscence, isTired, isSober) {
    
    if (hasDrivingLiscence == false){
        return "You cannot drive"
    }
    if (isTired == true || isSober == false) {
        return "You shouldn't drive"
    }
    return "You can drive"
}
    // Write you code here


module.exports = CanDrive;



// else {
    
//     else {
        
//     }
//     else {
        
//     }

// }