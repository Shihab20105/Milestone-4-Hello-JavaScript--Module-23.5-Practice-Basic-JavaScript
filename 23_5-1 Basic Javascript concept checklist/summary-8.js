/*                          23_5-1 Basic Javascript concept checklist and practice
                                          Summary - (8)
                                     Milestone - 4 Summary 
                            What have we learned in Milestone - 4?

** Startswith:
* The 'startswith()' method determines whether a string beings with the characters of a specified string. It returning true or false as output.

Examples:

Basic Usage:

let text = "Hello, World!";
console.log(text.startsWith("Hello"));  // Output: true
console.log(text.startsWith("World"));  // Output: false

Using 'position':

let text = "Hello, World!";
console.log(text.startsWith("World", 7));  // Output: true

Case-Sensitivity:

let text = "JavaScript";
console.log(text.startsWith("java"));  // Output: false


* Actually, the 'startsWith' method in JavaScript counts all characters in a string, including letters, spaces, punctuation, and special symbols, starting from index '0'. Let me clarify the misunderstanding and walk through the character positions with a detailed breakdown.


Character Indexing:
In the string 'Hello, World!':

'H  e  l  l  o  ,  (space)   W  o  r   l    d    !'
 0  1  2  3  4  5   6        7  8  9   10   11   12



** Endswith:
* The 'endswith()' method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

Examples:

Basic Usage:

let text = "Hello, World!";
console.log(text.endsWith("World!"));  // Output: true
console.log(text.endsWith("Hello"));   // Output: false

Using 'length':

let text = "Hello, World!";
console.log(text.endsWith("World", 12));  // Output: true

* In this case, we specify a 'length' of '12' to only consider the first 12 characters of the string "Hello, World!". The substring "Hello, World" ends with "World", so the method returns 'true'.

Case Sensitivity:

let text = "JavaScript";
console.log(text.endsWith("script"));  // Output: false

* The 'endsWith()' method is case-sensitive, so "JavaScript" does not end with "script" (with a lowercase "s").

* Here is the code:

let text = "Hello, World!";
console.log(text.endsWith("World", 12));  // Output: true

What’s Happening?
    1. The String:

let text = "Hello, World!";

    This is the string we are working with: "Hello, World!".

    2. 'The endsWith()' Method:

    * The 'endsWith()' method checks if a string ends with a given substring.

    3. Arguments in 'endsWith()':

    * "World": This is the substring we want to check if the string ends with.
    * '12': This number is the length of the string to check. It tells JavaScript to only consider the first 12 characters of the string (not the full 13).

How Does It Work?
    * The string "Hello, World!" has 13 characters in total.
    * When you pass '12' as the second argument to 'endsWith()', you are telling JavaScript to ignore the last character ('!' at position 12) and only check the first 12 characters, which is "Hello, World".
    So, JavaScript checks if "Hello, World" ends with "World", and since it does, the method returns 'true'.

Visualization of String:
Here’s the string "Hello, World!" with the 12 characters considered:

'H   e   l   l   o   ,  (space)   W   o   r   l    d'
 0   1   2   3   4   5    6       7   8   9   10   11

* When 'length = 12', the substring checked is "Hello, World", and since this ends with "World", it returns 'true'.

Key Point:
* The second argument (12) limits the comparison to the first 12 characters.
If you had passed '13', it would have considered the full string and checked if it ended with "World!".


What happens when you use '12' as the 'length'?
    When you call 'text.endsWith("World", 12)', you are telling JavaScript to only consider the first 12 characters of the string, ignoring the character at index '12', which is '!'.

So, effectively, JavaScript checks the substring:

"Hello, World"  (characters 0 to 11)

Now, it checks if this substring ("Hello, World") ends with the string "World", and since it does, it returns 'true'.

Key Idea:
    * Indexing starts from '0'.
    If you pass '12', you are telling JavaScript to use the first 12 characters of the string, excluding the 13th (which is at index '12').


** Explain what "with a given substring" means in the context of the 'endsWith()' method.

Definition of "Substring":
A substring is simply a part or a portion of a string. It can be any sequence of characters taken from within a larger string.

For example:

    * In the string "Hello, World!", a substring can be:
    * "Hello" (first 5 characters)
    * "World" (characters from index 7 to 11)
    * "!" (just the exclamation mark)
    * "Hello, World!" (the whole string itself)


Meaning of "with a given substring";
When we say that the 'endsWith()' method checks if a string ends with a given substring, we mean that it checks whether the last part (the ending portion) of the string matches a specified substring.

For example, if you have:

let text = "Hello, World!";

You can check if the string ends with certain substrings:

    Example 1: Checking if it ends with "World!"

console.log(text.endsWith("World!"));  // Output: true

    Here, "World!" is the substring we are checking for at the end of the string "Hello, World!".

    * The method checks if the string "Hello, World!" ends with the substring "World!". Since it does, the result is 'true'.

    Example 2: Checking if it ends with "World"

console.log(text.endsWith("World"));  // Output: false

    Here, "World" is the substring we are checking for at the end of the string "Hello, World!".

    * The method checks if the string "Hello, World!" ends with "World". Since the string ends with "World!" (with an exclamation mark), the result is 'false'.

To Summarize:
    * "Substring" means any part of a string.
    * When using 'endsWith()', we check if the last part of a string matches a specified substring.

    So, "with a given substring" means the specific portion (or part) of the string you want to check if the original string ends with.


let text = "Hello, World!";
console.log(text.endsWith("World"));  // Output: false
*/