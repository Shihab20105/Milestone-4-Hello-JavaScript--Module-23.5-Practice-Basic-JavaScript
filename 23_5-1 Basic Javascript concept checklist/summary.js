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
}                 

/* 
var name = 'Peter';

if (name === 'Peter') {
    console.log('Hello, Peter!');  // This line will be executed
} else if (name === 'John') {
    console.log('Hello, John!');   // This will be skipped
} else {
    console.log('Hello, stranger!'); // This will also be skipped
} 
*/
// Output: Hello, Peter!
/*

** Loop - 'for loop' and 'While loop'
* A 'while loop' is used to repeat a specific block of code until a condition is met.
* a 'for loop' iterates through a block of code a number of times.
* The 'break' statement is used to terminate the loop immediately. The 'continue' statement is used to skip the current iteration of the loop.

        while loop                      for loop
var num = 0;                        for(var i = 0; i < 5; i++){
while(num < 5){                        console.log('Hello'); 
    console.log('Hello');           }
    num = num + 1;
}

* Pop and Shift
const salad = ['Tomato', 'Mushroom', 'Broccoli', 'Cucumber', 'Lettuce', 'Carrot', 'Avocado'];
salad.pop(); // Avocado

const salad = ['Tomato', 'Mushroom', 'Broccoli', 'Cucumber', 'Lettuce', 'Carrot', 'Avocado'];
salad.shift(); // Tomato

* Some String Operations
Single string:
var text = 'a';

To write multiple strings in one line in JavaScript, you can use one of the following approaches depending on what you're trying to achieve:
Example 1: Declaring Multiple String Variables in One Line
let text1 = "hello", text2 = "world", text3 = "JavaScript";

Example 2: Concatenating Strings into a Single Variable
let text = "hello" + " " + "world";  
// Outputs: "hello world"

Example 3: Using Template Literals (Modern Syntax)
let text = `${"hello"} ${"world"}`;  
// Outputs: "hello world"

Example 4: Multiple Strings in an Array (if you want to keep them separate)
let texts = ["hello", "world", "JavaScript"];
console.log(texts[0]); 
// Outputs: "hello"

** Substring:
In JavaScript, a substring is a portion of a string, and you can extract it using the '.substring()' method or other methods like '.slice()' and '.substr()'. Here's how to use them:
1. Using '.substring(start, end)'
The '.substring()' method returns the part of the string between two specified indices. It takes two arguments: 'start' (where to begin) and 'end' (where to stop, not inclusive).
let text = "programming";
let subText = text.substring(0, 4);  
console.log(subText);
// Output: prog
* 'text.substring(0, 4)' extracts the characters from index 0 up to (but not including) index 4.

2. Using '.slice(start, end)'
Similar to '.substring()', but '.slice()' can accept negative indices to count from the end of the string.
let text = "programming";
let subText = text.slice(0, 4);
console.log(subText);
// Output: prog

3. Using '.substr(start, length)'
Similar to '.substring()', but '.slice()' can accept negative indices to count from the end of the string.
let text = "programming";
let subText = text.substr(0, 4);
console.log(subText);
// Output: prog
Recommendation
For general use, 'slice()' is a better choice because of its flexibility with negative indices.

Key Differences:
* '.substring()' and '.slice()' are similar, but '.slice()' allows negative indices.
* '.substr()' is less commonly used nowadays but can still be useful for simple substring extraction.


Examples:

let text = "hello world";

console.log(text.substring(0, 5));  
console.log(text.slice(6, 11));     
console.log(text.substr(6, 5));
// Output:
hello
world
world  



Differences Between '.substring()' and '.substr()':

'.substring(start, end)':

* Extracts the string from 'start' index to 'end' index (excluding the character at 'end').
* If 'start > end', it swaps the values of 'start' and 'end'.

'.substr(start, length)':

* Extracts from the 'start' index and takes the number of characters specified by 'length'.
* It does not take an 'end' index but rather the length of characters to extract.

Example of '.substring()' and '.substr()':

let text = "programming";

// .substring example
let subText1 = text.substring(0, 4);  // "prog"

// .substr example
let subText2 = text.substr(0, 4);     // "prog"

console.log(subText1);  // Outputs: "prog"
console.log(subText2);  // Outputs: "prog"


Important Note:

* '.substr()' is considered deprecated and may be removed in future versions of JavaScript, so it is recommended to use '.substring()' or '.slice()' instead.

So, using '.substring()' instead of '.substr()' will be fine, but if you need to specify the length of characters you want (like in '.substr()'), you'll have to adjust accordingly with '.substring()' by specifying the end index.

For example:

* '.substr(0, 4)' extracts 4 characters starting from index 0.
* '.substring(0, 4)' also extracts characters from index 0 up to index 4 (but not including index 4), which is effectively the same for this case.


Explain negative indices in '.slice()' and how it works:

Using '.slice(start, end)' with Negative Indices:
The '.slice()' method extracts a part of a string between two indices, just like '.substring()' and '.substr()'. However, negative indices in '.slice()' allow you to count positions from the end of the string, instead of the beginning.

How Negative Indices Work:
* Positive indices start counting from the beginning of the string (index '0' is the first character).
* Negative indices start counting from the end of the string (index '-1' is the last character).

Examples:

1. Positive Indices:
let text = "programming";
let subText = text.slice(0, 4);  // "prog"
console.log(subText);

* '.slice(0, 4)' starts from index '0' (the first character) and extracts up to index '4' (but not including '4'), giving "prog".

2. Negative Indices:
let text = "programming";
let subText = text.slice(-4, -1);  // "min"
console.log(subText);

* '.slice(-4, -1)' starts counting from the end of the string:
* '-1' refers to the last character ('g'),
* '-4' refers to the fourth character from the end ('m').
So, it extracts the substring "min" from the last 4th to last character.

Another Example with Full String:

let text = "programming";
let subText = text.slice(-5);  // "ming"
console.log(subText);

* '.slice(-5)' starts counting from the end of the string:
* '-5' refers to the fifth character from the end ('m').
* It extracts everything from that point to the end, resulting in "ming".

Summary:
* Positive indices: 'slice(0, 4)' -> Extracts characters from the beginning.
* Negative indices: 'slice(-4, -1)' -> Extracts characters starting from the end.

Why Use Negative Indices?
Negative indices are helpful when you want to extract characters near the end of the string without having to count how many characters are in the string.


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
* The Object type is used to store various keyed collections and more complex entities.


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


** Convert 'inch to feet, miles to kilometer'.

* Inch to Feet:

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const tomsInches = 168;
const tomsFeet = inchToFeet(tomsInches);
console.log('Tom Feet', tomsFeet);
//Output: Tom Feet 14 


* Miles to Kilometer:

function milesToKilometer(miles){
    const kilometer = miles*1.609;
    return kilometer;
}

console.log(milesToKilometer(5));
// Output: 8.045


Here is an improved version:

function milesToKilometer(miles) {
    const conversionFactor = 1.609; // Declaring the conversion factor as a constant
    const kilometer = miles * conversionFactor;
    return kilometer; // Returns the result
}

console.log(milesToKilometer(5)); // Output: 8.045


* Checked if a number is 'even' or 'odd'.

function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        console.log('Number is even');
    }
    else{
        console.log('Number is odd');
    }
}

isEven(303);
isEven(1280);

// Output:
Number is odd
Number is even 




function isEven(number){
    const remainder = number % 2;
    //console.log(remainder);
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}


const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);
// Output:
false
true


* Checked if a year is a leap year.

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('My year:', isMyYearLeapYear);
const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear);

// Output:
My year: false
Her year: true 



function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
// Example usage
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2024)); // true

Output:
true
false
true


Explanation:
1. 'year % 4 === 0': Checks if the year is divisible by 4.
2. 'year % 100 !== 0': Ensures that the year is not divisible by 100.
3. 'year % 400 === 0': If the year is divisible by 400, it overrides the previous condition, making it a leap year.


** Factorial
* A factorial is a function that multiplies a number by every number below it till 1.

// 1 + 2 + 3 + 4 + 5 + 6 + 7
 
for(let i = 1; i <=7; i++){
    console.log(i);
} 

// Output:
1
2
3
4
5
6
7



let sum = 0;
for(let i = 1; i <=7; i++){
    sum = sum + i;
    console.log(i, sum);
} 

// Output:
1 1
2 3
3 6
4 10
5 15
6 21
7 28


// Converting into 'function'
//Let’s walk through the function with an example input, say 'sumOfNumbers(5)':


function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}

sumOfNumbers(5);

Output:
1 1
2 3
3 6
4 10
5 15


1! = 1
2! = 2*1
3! = 3*2*1
4! = 4*3*2*1
5! = 5*4*3*2*1


3! = 3*2*1                          3! = 3*2!
                                    3! = 3*(3-1)!
                                    
                                    
4! = 4*3*2*1                        4! = 4*3!
                                    4! = 4*(4-1)! 
                                    
5! = 5*4*3*2*1                      5! = 5*4!
                                    5! = 5*(5-1)!




function multiplicationNumbers(number){
    let result = 0;
    for(let i = 1; i <= 7; i++){
        result = result * i;
    }
    return result;
}

const result = multiplicationNumbers(7); 
console.log(result); 

//Output: 0



function multiplicationNumbers(number){
    let result = 1;
    for(let i = 1; i <= 7; i++){
        result = result * i;
    }
    return result;
}

const result = multiplicationNumbers(7); 
console.log(result); 

// Output: 5040


 
function multiplicationNumbers(number){
    let result = 1;
    for(let i = 1; i <= 7; i++){
        result = result * i;
    }
    return result;
}

const result = multiplicationNumbers(9); 
console.log(result); 

//Output: 5040


 
function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = factorial(9); 
console.log(result); 

//Output: 362880


 
To calculate the factorial in reverse, you can modify the 'for' loop so that it starts from the given number and decrements down to 1. Here's how you can do it:


function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}

const result = factorial(9);
console.log(result);

// Output: 362880


In this version:

* The loop starts with 'i' equal to 'number' and decrements 'i' down to 1.
* It multiplies 'result' by 'i' in each iteration, just like before, but in reverse order.
This will give the same result:
Output: 362880


** Factorial Reverse With For Loop:

function factorial(number){
    for(let i = number; i >= 1; i--){
        console.log(i);
    }
}

factorial(7); 

// Output:
7
6
5
4
3
2
1



 
function factorial(number){
    for(let i = number; i >= 1; i--){
        console.log(i);
    }
}

factorial(9); 

// Output:
9
8
7
6
5
4
3
2
1 



function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result *i;
        console.log(i);
    }
    return result;
}

const fact = factorial(9);
console.log('Factorial of 9:', fact); 

// Output:
6
5
4
3
2
1
Factorial of 9: 362880 


 
function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result *i;
        console.log(i);
    }
    return result;
}

const number = 5;
const fact = factorial(number);
console.log('Factorial of :', number, fact); 

// Output:
5
4
3
2
1
Factorial of : 5 120


function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result *i;
        console.log(i);
    }
    return result;
}

const number = 6;
const fact = factorial(number);
console.log('Factorial of:', number, fact);
// Output:
6
5
4
3
2
1
Factorial of: 6 720 


** Factorial With While Loop:

function factorial(number){
    let num = 1;
    let result = 1
    while(num <= number){
        result = result * num;
        num++;
    }
    return result;
}

const number = 6;
const fact = factorial(number);
console.log('Factorial of:', number, fact);
// Output:
Factorial of: 6 720


* Factorial Reverse With While Loop:*

function factorial(number){
    let i = number;
    let result = 1;
    while( i >= 1){
        result = result * i;
        i--;
    }
    return result;
}

const number = 7;
const fact = factorial(number);
console.log('Factorial of:', number, fact);
// Output:
Factorial of: 7 5040 */
