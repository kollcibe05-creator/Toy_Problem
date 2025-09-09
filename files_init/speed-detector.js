
function state(speed) {          //
    const speedlimit = 70        //assigining the constant speedlimit which is 70
    const kmPerPoint = 5         //assigning the constant point per kilometer which is 5
 if (speed<speedlimit) {         
    return console.log("Ok.")     //if the speed limit is below forty the state should output ok.
 }
 else {
    const points = Math.floor((speed-speedlimit) / kmPerPoint);   //calculating the points gunnered
    if (points>12) {
        return console.log("License suspended")                   //license should be suspended if points has reached 12
            }
    else {
        return console.log("points:" + points)                     //if points are below 12, output the points gunnered
    }
}

 //EXAMPLES//
}
state(20)          //value within the acceptable range
state(80)          //value gunnering points but below 12 points
state(74)          //value that isn't a multiple of five
state(189)         //value gunnering more than 12 points