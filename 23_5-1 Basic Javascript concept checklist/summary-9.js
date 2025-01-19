/*                          23_5-1 Basic Javascript concept checklist and practice
                                         Summary - (9)
                                  Milestone - 4 Summary 
                        What have we learned in Milestone - 4?

** Slice()
The 'slice()' method in JavaScript returns a portion of an array or string, without changing the original.

Example with Array:

const fruits = ['apple', 'banana', 'cherry', 'date'];
const slicedFruits = fruits.slice(1, 3); // Extracts elements from index 1 to 2 (not including 3)

console.log(slicedFruits); // Output: ['banana', 'cherry']
console.log(fruits);       // Output: ['apple', 'banana', 'cherry', 'date'] (Original array unchanged)
Output:
[ 'banana', 'cherry' ]
[ 'apple', 'banana', 'cherry', 'date' ]


Example with String:

const text = 'JavaScript';
const slicedText = text.slice(0, 4); // Extracts characters from index 0 to 3

console.log(slicedText); 
console.log(text);  
Output:
Java
JavaScript


Explanation:
'slice(0, 4)' will extract elements or characters from index '0 to 3' (because the 'end' index is exclusive).

Example with Array:

const numbers = [10, 20, 30, 40, 50];
const slicedNumbers = numbers.slice(0, 4); // Extracts elements at indices 0, 1, 2, and 3
console.log(slicedNumbers);
Output: [10, 20, 30, 40]


Example with String:

const text = 'JavaScript';
const slicedText = text.slice(0, 4); // Extracts characters at indices 0, 1, 2, and 3
console.log(slicedText); 
Output: Java

* The 'slice()' method always stops just before the 'end' index.


** Splice()
The 'splice()' method changes the contents of an array by removing and/or adding new elements in place.

    *The 'splice()' method in JavaScript adds or removes elements from an array and modifies the original array.

Syntax:
array.splice(start, deleteCount, item1, item2, ...)

* 'start': The index where changes begin.
* 'deleteCount' (optional): The number of elements to remove.
* 'item1, item2,' ... (optional): Elements to add at the start index.


    Example 1: Removing Elements

const fruits = ['apple', 'banana', 'cherry', 'date'];
const removedFruits = fruits.splice(1, 2);  // Remove 2 elements starting at index 1

console.log(fruits);        
console.log(removedFruits); 
Output:
[ 'apple', 'date' ]
[ 'banana', 'cherry' ]


    Example 2: Adding Elements

const colors = ['red', 'blue'];
colors.splice(1, 0, 'green', 'yellow');  // Add 'green' and 'yellow' at index 1

console.log(colors); 
Output:
[ 'red', 'green', 'yellow', 'blue' ]


    Example 3: Replacing Elements

const animals = ['dog', 'cat', 'rabbit'];
animals.splice(1, 1, 'lion');  // Replace 'cat' at index 1 with 'lion'

console.log(animals); 
Output:
[ 'dog', 'lion', 'rabbit' ]


    Key Characteristics:
        * Modifies the Original Array: Unlike 'slice()', 'splice()' changes the array.
        * Removes and/or Adds Elements: Flexible to both remove and insert.


Summary:
    * 'splice()' changes the array in place by removing, adding, or replacing elements.
    * 'splice(start, deleteCount)' removes elements.
    * 'splice(start, 0, items)' adds elements without removing.



Original Code:

const fruits = ['apple', 'banana', 'cherry', 'date'];
const removedFruits = fruits.splice(1, 2);  // Remove 2 elements starting at index 1

console.log(fruits);         
console.log(removedFruits);  
Output:
[ 'apple', 'date' ]
[ 'banana', 'cherry' ]


Step-by-Step Explanation:

Step 1: Understanding the Array
    * 'fruits' is an array: ['apple', 'banana', 'cherry', 'date']
    * Each element has an index (starting from 0):

Index:   0       1        2        3
     'apple', 'banana', 'cherry', 'date'


Step 2: Applying splice(1, 2)
    * '1' is the start index where the operation begins — so, the splice starts at index '1' (which is 'banana').
    * '2' is the delete count — it removes 2 elements, starting from index '1'.

The elements removed are:

    * 'banana' (index 1)
    * 'cherry' (index 2)

These removed elements are returned in a new array, stored in 'removedFruits'.


Step 3: Modifying the Original Array
    * After removing 'banana' and 'cherry', the original array (fruits) now contains:
['apple', 'date']


Output:
    * 'removedFruits' contains the removed elements:
['banana', 'cherry']

    * 'fruits' is modified:
['apple', 'date']


Summary:
    1. 'splice(1, 2)' starts removing elements from index '1' and removes 2 elements.
    2. The 'splice()' method modifies the original array (fruits).
    3. The removed elements are returned as a new array (removedFruits).


* Let’s clarify how 'splice(1, 2)' works and why it only removes 'banana' and 'cherry'.

    Key Concept: 'splice(start, deleteCount)'

        * 'start': The starting index where removal begins (inclusive).
        * 'deleteCount': The number of elements to remove, starting from the 'start' index.


    Detailed Explanation of 'splice(1, 2)':

        1. 'start = 1': This means start removing at index '1', which is 'banana'.
        2. 'deleteCount = 2': This means remove a total of 2 elements starting from 'banana'.
        * 'banana' (index 1) is the first element removed.
        * 'cherry' (index 2) is the second element removed.
        So, only two elements are removed, not three. The 'deleteCount' tells how many elements to remove, starting from the specified 'start' index.


Why Not 'cherry' and 'date' Together?

    * Even though 'cherry' is at index 2, the 'deleteCount' is relative to the starting point (index 1).
    * The 'deleteCount = 2' removes the next two elements from index 1:
    * First element: 'banana'
    * Second element: 'cherry'
    'date' remains in the array because it is outside the range of the removal operation.

Visual Example:

const fruits = ['apple', 'banana', 'cherry', 'date'];
const removedFruits = fruits.splice(1, 2);  // Start at index 1, remove 2 elements

console.log('Modified fruits array:', fruits); 
console.log('Removed elements:', removedFruits); 
Output:
Modified fruits array: [ 'apple', 'date' ]
Removed elements: [ 'banana', 'cherry' ]


    1. Original indices:

   0       1        2        3
'apple' 'banana' 'cherry' 'date'


    2. 'splice(1, 2)' removes:

    * Index 1: 'banana'
    * Index 2: 'cherry'


    3. Remaining array:

['apple', 'date']


Summary:
    * 'splice(1, 2)' does not remove elements by index values — it removes a specific count of elements starting from the given index.
    * 'banana' (index 1) and 'cherry' (index 2) are removed, but 'date' remains because only 2 elements were specified for deletion. */