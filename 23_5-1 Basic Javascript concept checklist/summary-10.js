/*                          23_5-1 Basic Javascript concept checklist and practice
                                         Summary - (10)
                                    Milestone - 4 Summary 
                            What have we learned in Milestone - 4?

** Concat()
The 'concat()' method is used to merge two or more arrays.

var str1 = 'Hello';
var str2 = 'World!';

var res = str1.concat(' ', str2);  // Adds a space between 'Hello' and 'World!'
console.log(res);  
Output: Hello World!


* The 'concat()' method in JavaScript is used to join two or more strings into one. It returns a new string without modifying the original strings. This method is often used for combining string values efficiently.

Syntax:
string1.concat(string2, string3, ..., stringN)

Parameters:
* 'string2, string3, ..., stringN': One or more strings to concatenate with the first string.

Example:

let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);
Output: John Doe

Key Points:

    * Non-Mutating: 'concat()' does not change the original strings.
    * Multiple Arguments: You can pass more than two strings to concatenate.

Alternative:
    Using the '+' operator or template literals is more common and sometimes more readable:


let fullName = firstName + " " + lastName;  // Using + operator
let fullName2 = `${firstName} ${lastName}`; // Using template literals



let firstName = "John";
let lastName = "Doe";

// Using + operator
let fullName = firstName + " " + lastName;
console.log(fullName);  

// Using template literals
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2); 
Output:
John Doe
John Doe

All these methods produce the same result. Use 'concat()' if you prefer method chaining or find it clearer for multiple concatenations.


** isArray()
The 'isArray()' method determines whether the passed value is an Array.


* The 'Array.isArray()' method in JavaScript is used to determine whether a given value is an array. It returns a boolean ('true' or 'false').

Syntax:

Array.isArray(value)

* 'value': The value you want to check.

Example:

let arr = [1, 2, 3];
let str = "Hello";

console.log(Array.isArray(arr));  // Output: true
console.log(Array.isArray(str));  // Output: false

Use Cases:

    1. To check if a variable is an array before performing array-specific operations.
    2. Helps avoid type-related errors when working with complex data structures.

Comparison with typeof:

console.log(typeof arr);  // Output: "object" (arrays are objects)

    The 'typeof' operator returns "object" for arrays, so using 'Array.isArray()' is the correct way to differentiate arrays from other objects.

let arr = [1, 2, 3];
let str = "Hello";

console.log(Array.isArray(arr)); 
console.log(Array.isArray(str));  
console.log(typeof arr);
Output:
true
false
object
*/