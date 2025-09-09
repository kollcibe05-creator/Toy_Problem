                                       //Solution//



function grade(marks) {                          //declaring the function that sets grade as parameter and marks as argument
      //if statements//
    if (marks>100 || marks<=0){
        return console.log('Invalid!')     //Accepts values between 0 and 100
    }
    
    if (marks>79 ) {
        return console.log("Grade:A" )      //A 
    }
    else if (marks>=60) {
        return console.log("Grade:B")       //B
    }
    else if (marks>=49) {
        return console.log("Grade:C")       //C
    }
    else if (marks>=40) {
        return console.log( "Grade:D")      //D
    }
    else if (marks<40) {
        return console.log( "Grade:E")      //E
    }
    else {
        return console.log("Out of context")
    }

    
    
}

//EXAMPLES
grade(60)   //testing grades
grade(101)   //testing invalid input
grade (0)    //testing invalid input 

