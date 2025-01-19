/*                          23_5-1 Basic Javascript concept checklist and practice
                                          Summary - (5)
                                    Milestone - 4 Summary 
                            What have we learned in Milestone - 4?

** What is function in JavaScript?

* A block of code.
* A set of statements that performs a task when it is called.
* Maintains a relationship with input and output.

                        Function syntax

                  (Name)   (Parameters)
                     ^        ^
        function addNumbers(a, b){
(Body)>    return a + b;
        }


                    (Function
                        call)    (Arguments)
                          ^         ^
        const result = addNumbers(5, 7);
                ^
        (Return value)

** Object syntax 
The Object type is used to store various keyed collections and more complex entities.


        const object = {
            hello: 'world' -->(Property value)
        }     ^
              ^
        (Property name(key))


** 'var', 'let' and 'const' are containers for storing variables.

1. 'var'
    * Old way to declare variables.
    * Can be used anywhere in a function once declared.
    * Can be changed or reassigned.
Example:

var name = "John";
name = "Mike"; // Works fine

2. 'let'
    * Newer and better for most cases.
    * Can only be used inside the block '{}' where it’s declared.
    * Can be reassigned.
Example:

let age = 25;
age = 30; // Works fine

3. 'const'
    * Like 'let', but cannot be changed after setting.
    * Good for values you don’t want to change.
Example:

const city = "New York";
city = "Los Angeles"; // ERROR! Can’t reassign a const

Quick Summary:

Keyword	 ---------- Can Change Value?	----------- Works Only Inside {}?	---------- Use It for...
 ^                    ^                               ^                                 ^
var	    ----------  Yes	                ----------- No	                    ---------- Old code (avoid using)
let	    ----------  Yes	                ----------- Yes	                    ---------- Values that can change
const	----------  No	                ----------- Yes	                    ---------- Values that stay the same

* Use 'let' for variables that will be reassigned.
* Use 'const' for values that will not be reassigned (default choice for most variables).
* Avoid 'var' due to potential scoping issues and unexpected behaviors.
*/