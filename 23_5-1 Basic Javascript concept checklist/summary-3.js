/*                          23_5-1 Basic Javascript concept checklist and practice
                                              Summary - (3)
                                        Milestone - 4 Summary 
                                What have we learned in Milestone - 4?

** Pop and Shift:

const salad = ['Tomato', 'Mushroom', 'Broccoli', 'Cucumber', 'Lettuce', 'Carrot', 'Avocado'];
salad.pop(); // Removes 'Avocado' from the array
console.log(salad); 
// Output: ['Tomato', 'Mushroom', 'Broccoli', 'Cucumber', 'Lettuce', 'Carrot']

* The 'shift()' method in JavaScript removes the first element from an array and returns that element. Here’s how it works with your example:

const salad = ['Tomato', 'Mushroom', 'Broccoli', 'Cucumber', 'Lettuce', 'Carrot', 'Avocado'];
salad.shift(); // Removes 'Tomato' from the array
console.log(salad); 
// Output: ['Mushroom', 'Broccoli', 'Cucumber', 'Lettuce', 'Carrot', 'Avocado']

Explanation:
    * 'shift()' removes the first element ('Tomato') from the 'salad' array.
    * It returns the removed element, so you can capture it in a variable if needed:

const firstElement = salad.shift();
console.log(firstElement); 
// Output: Tomato

Key Points:
    * 'shift()' changes the original array by removing its first element.
    * It returns the removed element, which can be stored or used elsewhere.
    * 
This method is useful when working with queues or other data structures where elements are processed in a first-in, first-out (FIFO) manner.

** Some String Operations:
Single string:
var text = 'a';

To write multiple strings in one line in JavaScript, you can use one of the following approaches depending on what you're trying to achieve:
    Example 1: Declaring Multiple String Variables in One Line
    Using the + Operator:

let text1 = "hello", text2 = "world", text3 = "JavaScript";
let result = text1 + " " + text2 + " " + text3;  // Adding spaces between words
console.log(result);
// Output: hello world JavaScript

    Example 2: Concatenating Strings into a Single Variable
    If you're declaring the 'text' variable twice using 'let'. This will cause a syntax error in JavaScript. You cannot declare the same variable name twice in the same scope using 'let' or 'const'. Here's how to fix it:

let text1 = "hello" + " " + "world";  // Using concatenation
let text2 = `hello world`;  // Using template literals
console.log(text1);  // Output: hello world
console.log(text2);  // Output: hello world

    Explanation:
    * 'text1' uses concatenation with "hello" + " " + "world".
    * 'text2' uses a template literal, which is a simpler and more readable way to create strings.
    * Both methods result in the same string, "hello world".
    
    Alternative Approach:
    If you want to use only one variable:

let text = "hello" + " " + "world";  // or let text = `hello world`;
console.log(text);  // Output: hello world

    This avoids declaring 'text' multiple times.

Example 3: Using Template Literals (Modern Syntax)
let text = `${"hello"} ${"world"}`; 
console.log(text); 
// Outputs: hello world

Explanation:

    * Template literals (enclosed by backticks ' ` ` ') allow embedding expressions using' ${}`.
    * "hello" and "world" are string literals.
    * ${"hello"} evaluates to "hello", and ${"world"} evaluates to "world".
    * The result is concatenated with a space between them, producing "hello world".

Example 4: Multiple Strings in an Array (if you want to keep them separate)
let texts = ["hello", "world", "JavaScript"];
console.log(texts[0]); 
// Outputs: hello
*/