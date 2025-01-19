/*                          23_5-1 Basic Javascript concept checklist and practice
                                         Summary - (4)
                                    Milestone - 4 Summary 
                            What have we learned in Milestone - 4?

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

Recommendation:
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
*/