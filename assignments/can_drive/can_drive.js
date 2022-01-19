function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // if (hasDrivingLiscence == false && isTired == false && isSober == true) {
    //     return "You cannot drive"
    // }
    // else if (hasDrivingLiscence == false && isTired == true && isSober == true) {
    //     return "You cannot drive"
    // }
    // else if (hasDrivingLiscence == true && isTired == false && isSober == false) {
    //     return "You shouldn't drive"
    // }
    // else if (hasDrivingLiscence == true && isTired == true && isSober == false) {
    //     return "You shouldn't drive"
    // }

    // else if (hasDrivingLiscence == true && isTired == false && isSober == true) {
    //     return "You can drive"
    // }
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