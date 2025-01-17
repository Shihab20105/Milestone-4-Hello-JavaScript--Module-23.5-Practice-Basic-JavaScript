/*                          23_5-2 Simple Problem solving checklist and practice

                                      Practice - (2) 

** Question 1:
 Feet to inch, 'feetToInch'. You must name the function exactly as it is written here. How many inches are in 15 feet?

The function named exactly as 'feetToInch' should convert feet to inches. Here's the solution and how to calculate how many inches are in 15 feet:

function feetToInch(feet){
    return feet *12;
}
const result = feetToInch(15);
console.log(result);
Output: 180
/ ------------------------------------------------------------------------------------------------------------- /

function feetToInch(feet) {
    return feet * 12;  // 1 foot = 12 inches
  }
  
const result = feetToInch(15);  // Convert 15 feet to inches
console.log(result);
Output: 180 


* In the function 'feetToInch(feet)', the part inside the parentheses ('feet') is called a parameter. Here’s what it represents and why it’s important:

Explanation:

1. Parameter Definition:

    * 'feet' is a placeholder or a variable that represents the input the function will receive when it is called.
    * This parameter allows the function to work with different values, not just a fixed number.

2. Functionality:

    * When you call the function, you pass a value (known as an argument) to the parameter 'feet'.
    * The function uses this value inside its code to perform calculations or actions.

Example Breakdown:

function feetToInch(feet) {  // 'feet' is a parameter
  return feet * 12;          // The parameter 'feet' is used in the calculation
}

const result = feetToInch(15);  // 15 is the argument passed to the function
console.log(result);
Output: 180

Key Terms:
    * Parameter (feet): A variable used in the function definition.
    * Argument (15): The actual value passed when calling the function.
    * 
This design allows the function to convert any number of feet to inches, making it reusable and flexible.


function feetToInch(feet) {
    return feet * 12;  // 1 foot = 12 inches
  }
  
const myFeet = 15;  // Number of feet
const result = feetToInch(myFeet);  // Convert feet to inches
console.log(result);  // Output: 180



function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const tomsInches = 168;
const tomsFeet = inchToFeet(tomsInches);
console.log('Tom Feet', tomsFeet);
Output: Tom Feet 14
  * It converts inches to feet by dividing the input inches by 12, and the output for 168 inches is 14 feet, which is accurate.

Here’s a brief breakdown:

  * 'inchToFeet' function takes a parameter 'inches'.
  * It divides 'inches' by 12 to convert to feet.
  * The function is called with '168' inches, and the result (14) is logged to the console.
/ ----------------------------------------------------------------------------------------------------------- /

function feetToInch(feet){
    const inches = feet * 12;
    return inches;
}

const tomsFeet = 15;
const tomsInches = feetToInch(tomsFeet);
console.log('Toms Inches', tomsInches);
Output: Toms Inches 180

* break down your code in more detail, step-by-step, so you fully understand how everything works.

Step 1: Function Definition:

function feetToInch(feet) {
    const inches = feet * 12;
    return inches;
}

  * Function Name: 'feetToInch' – This is the name of the function you were asked to create. The name must be exactly as written.
  * Parameter: ('feet') – This is a placeholder variable that the function uses to receive input (the number of feet).
  * Calculation: 'const inches = feet * 12;' – The number of feet is multiplied by 12 because there are 12 inches in 1 foot.
  * Return Statement: 'return inches;' – This sends the result (the number of inches) back to wherever the function is called.

Step 2: Calling the Function:

const tomsFeet = 15;
const tomsInches = feetToInch(tomsFeet);

* Variable 'tomsFeet': This stores the value '15', representing how many feet you want to convert.
* Calling 'feetToInch(tomsFeet)':
    * The function is called with '15' as the argument (input).
    * Inside the function, 'feet = 15', so the calculation is 15 * 12 = 180.
        *feetToInch(tomsFeet) means:
            * 'tomsFeet' contains '15'.
            * So, when calling 'feetToInch(tomsFeet)', it’s like writing 'feetToInch(15)'. 
    * The result (180) is returned by the function and stored in 'tomsInches'.

Step 3: Output:

console.log('Toms Inches', tomsInches);

  * 'console.log('Toms Inches', tomsInches);' prints the message "Toms Inches" followed by the value of 'tomsInches' (which is '180').

  * The final output will be:
  Toms Inches 180

Summary of How It Works:

  1. Function: 'feetToInch(feet)' converts feet into inches by multiplying the input by 12.
  2. Calling the Function: 'feetToInch(tomsFeet)' sends '15' into the function, performs the calculation, and returns '180'.
  3. Result: The result (180) is stored in 'tomsInches' and printed.

Why This is Useful:

  * Reusable Code: You can use 'feetToInch()' with any number of feet by changing the input:

console.log(feetToInch(5));  // Output: 60
console.log(feetToInch(10)); // Output: 120

  * Dynamic Input: The function is flexible and works with different values without changing its core code. This saves time and reduces errors.

Conclusion:

  * Your code follows best practices, and the function works correctly.
  * The 'feet' parameter allows the function to handle various inputs dynamically.
  * Multiplying by '12' converts feet to inches accurately, and 'return' gives back the result for use elsewhere.
*/