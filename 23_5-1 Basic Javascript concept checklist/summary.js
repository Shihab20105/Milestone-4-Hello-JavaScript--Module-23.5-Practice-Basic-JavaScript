/*                          23_5-1 Basic Javascript concept checklist and practice */

/*                          Milestone - 4 Summary 

** What have we learned in Milestone - 4?

* JavaScript is a 'high-level, interpreted programming language'. It makes the web pages more 'interactive,.We can use JavaScript to make 'animation'.
* Variable is like a box that store things. There are five types of variables 'number, string, boolean, null and undefined'.
* JavaScript keywords are 'reserved' words and they cannot be used as variable name and function name.
* 'Camel Case, Snake Case and Pascal Case' are the three most common naming conventions.
* Variable names are case sensitive.
* We discussed 'four' types of mathematical operations: 'addition, subtraction, multiplication and 'division (+, -, *, /)'.
* Shorthand mathematical operations (+=, -=, *=, /=, ++, --).
* We can join two strings together using the 'concatenation operator, +'.
* Using the 'modulus operator, %', we can find the remainder of a division.
* parseInt and parseFloat
    parseInt                            parseFloat
    string to int                       string to float
    '20' ---> 20                        '20.13' ---> 20.13
* Typeof
'typeof' is a JavaScript keyword that will return the type of variable.

var massage = 'Hello Coders!';
console.log(typeof message);
// Output: string

* Array in JavaScript
const salad = ['Tomato', 'Mushroom', 'Broccoli', 'Cucumber', 'Lettuce', 'Carrot', 'Avocado'];
Element at index0 is Tomato
Element at index1 is Mushroom
Element at index2 is Broccoli
Element at index3 is Cucumber
Element at index4 is Lettuce
Element at index5 is Carrot
Element at index6 is Avocado

const number = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

* Array Length
Length is a property of arrays in JavaScript that tells us the number of elements in a given array.
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
                  0    1    2    3    4    5    6    7    8    9
                  Array length is 10
                  An array of 10 elements 

* The 'indexOf'() method returns the index (position) of a specified value.
* We can replace an element in an array with the help of array indices e.g: 'arrayName[index] = newValue'.
* The 'push'() method adds new items to the end of an array.
* The 'pop'() method removes the last element from the end of an array.
* Comparison operators are used to test for 'true' or 'false'.
* The 'if statement' executes if the condition is 'true'.
* The 'else statement' executes if the condition is 'false'.
* Logical Operator, '&&', returns 'true' if 'both statements are true' and logical operator, '||', returns 'true' if 'one of the statements is true'.
* We write multi stage conditions if-else when we have multiple conditions.
* A nested conditional statement is 'an if or else statement' inside another 'if else statement'. 

* Multi stage condition
var name = 'Peter';

if(name == 'Peter'){
    //code will be executed
}
else if(name == 'John'){
    //code will not be executed
}
else{
    //code will not be executed
} */                 

var name = 'Peter';

if (name === 'Peter') {
    console.log('Hello, Peter!');  // This line will be executed
} else if (name === 'John') {
    console.log('Hello, John!');   // This will be skipped
} else {
    console.log('Hello, stranger!'); // This will also be skipped
}
// Output: Hello, Peter!
    
    
