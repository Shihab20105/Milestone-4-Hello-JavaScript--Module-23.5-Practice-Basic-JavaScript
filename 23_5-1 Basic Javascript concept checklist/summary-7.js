/*                          23_5-1 Basic Javascript concept checklist and practice
                                              Summary - (7)
                                         Milestone - 4 Summary 
                                What have we learned in Milestone - 4?

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


* To calculate the factorial in reverse, you can modify the 'for' loop so that it starts from the given number and decrements down to 1. Here's how you can do it:

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
9
8
7
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


* Factorial Reverse With While Loop:

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
Factorial of: 7 5040 


** Includes:
* The 'includes()' method returns true if an array 'contains' a specific value.

let fruits = ['apple', 'banana', 'mango'];

console.log(fruits.includes('banana'));  // true
console.log(fruits.includes('orange'));  // false

Notes:
    * The method performs a strict equality check (similar to '===').
    * It works on arrays and can also be used with strings.

Example with 'fromIndex':

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3, 2));  // true (starts searching from index 2)
console.log(numbers.includes(1, 2));  // false (1 is before index 2)
*/