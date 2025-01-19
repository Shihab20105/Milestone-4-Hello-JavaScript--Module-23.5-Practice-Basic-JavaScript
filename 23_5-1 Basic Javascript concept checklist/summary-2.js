/*                          23_5-1 Basic Javascript concept checklist and practice
                                          Summary - (2)
                                    Milestone - 4 Summary 
                            What have we learned in Milestone - 4?

** Array Length:
Length is a property of arrays in JavaScript that tells us the number of elements in a given array.

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
                  0    1    2    3    4    5    6    7    8    9
                  Array length is 10
                  An array of 10 elements 


** The 'indexOf()' method returns the index (position) of a specified value.

** We can replace an element in an array with the help of array indices e.g: 'arrayName[index] = newValue'.

** The 'push()' method adds new items to the end of an array.

** The 'pop()' method removes the last element from the end of an array.

** Comparison operators are used to test for 'true' or 'false'.

** The 'if statement' executes if the condition is 'true'.

** The 'else statement' executes if the condition is 'false'.

** Logical Operator, '&&', returns 'true' if 'both statements are true' and logical operator, '||', returns 'true' if 'one of the statements is true'.

** We write multi stage conditions if-else when we have multiple conditions.

** A nested conditional statement is 'an if or else statement' inside another 'if else statement'. 


** Multi stage condition:

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
/ ------------------------------------------------------------------------------------------------------------- /
var name = 'Peter';

if (name === 'Peter') {
    console.log('Hello, Peter!');  // This line will be executed
} else if (name === 'John') {
    console.log('Hello, John!');   // This will be skipped
} else {
    console.log('Hello, stranger!'); // This will also be skipped
} 
// Output: Hello, Peter!

** Loop - 'for loop' and 'While loop':

    * A 'while loop' is used to repeat a specific block of code until a condition is met.
    * a 'for loop' iterates through a block of code a number of times.
    * The 'break' statement is used to terminate the loop immediately. The 'continue' statement is used to skip the current iteration of the loop.

    while loop                         for loop
            ^                               ^
var num = 0;                        for(var i = 0; i < 5; i++){
while(num < 5){                        console.log('Hello'); 
    console.log('Hello');           }
    num = num + 1;                  // Output:
}                                   Hello
// Output:                          Hello
Hello                               Hello
Hello                               Hello
Hello                               Hello
Hello
Hello
 */