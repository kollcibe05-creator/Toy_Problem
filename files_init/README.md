# Toy Problem
##### Welcome to Toy Problem!!
This project involves automation of calculations involving:
1. Net Salary
2. Assigning grades in regards to marks
3. Speed detecting and points generation.
All the user has to do is input the dependencies for the process to be automated.

# Description
The repo has four files:
1. [`grades-generator.js`](./files_init/grade-generator.js) : marks are input and returns grade as output.

2. [`net-salary-calculator`](./files_init/net-salary-calculator.js) : salary and benefits are input and the nhif, nssf , PAYE ,gross-income and relief are given as output.

3. [`speed-detector`](./files_init/speed-detector.js) : speed is detected and provided as input.
If the limit is below 70 then the state of his license is Ok. 
If speed is above 70 then per each five km/hr, a point is given or added.
Upon gunnering twelve points the License of the motorist is suspended.
If the license suspension points are not reached, the total is returned as output.

4. `README.md` : It is a simply written .md file that descriptively explains what the code entails.
# Project setup
### grade-generator.js
*function grade(marks) { }* 

It initializes a function called grade and sets marks as the parameter.

The *(`if......else if`)* conditionals have been used to determine a student's grade based on his/her marks.

*(`grade(marks)`)*  
Calls the function and the argument(student's marks) is to be input at the *()*

### speed-detector.js
*(`function state(speed){}`)*  

A function called state is declared and a parameter(speed) where our argument is to be input is set.

*(`if (speed<speedlimit ){return console.log("Ok.")}`)*  

If  speed  is  70 and below return "okay."

*(`const points = Math.floor((speed-speedlimit) / kmPerPoint)`)* 

calculating the points gunnered after the speed limit is exceeded

*(`if (points>12) {return console.log("License suspended")}`)*  

License should be suspended if points has reached 12.

*(` else { return console.log("points:" + points)`)*        
 If points are below 12, output the points gunnered.

 ### net-salary-calculator.js
 The system works under the mathematical formulas listed below:
 1. **grossSalary= basicSalary + benefits**
 2. **nssf1= 0.06*8000**
 3. **nssf2= 0.06*(grossSalary-8000)**
 4. **shif= 2.75*grossSalary**
 5. **HousingLevy= 1.5*grossSalary**
 6. **taxable = grossSalary-HousingLevy-shif-nssf2-nssf1**
 7. **Netpay = grossSalary-grossSalary-HousingLevy-shif-nssf2-nssf1-totalTax**
 

            






## Technologies used
- Markdown
- Javascript
- Github

# Author & License
## Author
#### By *Collins Kibet*
#### Date, 2025/09/09
### License
The contents of this file are within the scope of the syntax provided by the CommonMark Community, 2025.





## Support and contact details
[`github account`](https://github.com/kollcibe05-creator)

