/*                          23_5-2 Simple Problem solving checklist and practice

                                      Practice - (6)

** Question 5:
 There will be an array, it will have many numbers in it and there will be positive and negative numbers. For example [45, 87, 96, 11, 63, -56, 71, 28]; . If a negative number ever comes up, the loop will stop at that point and It will return all the numbers found until it is stops. You have to declare a function which is 'onlyPositive'. 
* You will pass an array like this as an input parameter to a function.
* After this, your task will be to take each element from this array until, when you get a negative number which has a value less than 0, then you have to stop the loop immediately, then all the elements found so far, you will return them as an array.

function onlyPositive(numbers){
    let result = [];
    for(let number of numbers){
        if(number < 0){
            break;
        }
        result.push(number);
    }
    return result;   
}

let inputArray = [45, 87, 96, 11, 63, -56, 71, 28];
let output = onlyPositive(inputArray);
console.log(output);
// Output: [ 45, 87, 96, 11, 63 ]
/ ------------------------------------------------------------------------------------------------------------- /

function onlyPositive(numbers) {
    let result = [];
    for (let number of numbers) {
      if (number < 0) {
        break;  // Stop the loop when a negative number is found
      }
      result.push(number);  // Add the positive number to the result array
    }
    return result;  // Return the array containing only the positive numbers until the loop stopped
}
  
// Example usage
let inputArray = [45, 87, 96, 11, 63, -56, 71, 28];
let output = onlyPositive(inputArray);
console.log(output);  
// Output: [45, 87, 96, 11, 63]


What is happening step by step?
1. Function Declaration:
    We create a function called 'onlyPositive' that takes one input (an array of numbers).
    Example input: '[45, 87, 96, 11, 63, -56, 71, 28]'

2. Empty List (Array) for Result:
    We start with an empty array called 'result' where we will store all the positive numbers.

3. Loop to Check Each Number:
    The 'for (let number of numbers)' loop goes through each number in the array one by one:
    * First, it looks at '45', then '87', then '96', etc.

4. Check for a Negative Number:
   The 'if (number < 0)' line checks if the number is negative.
    * If it finds a negative number (like '-56'), it uses 'break' to stop the loop immediately.
    * It doesn’t check any more numbers after that.

5. Adding Positive Numbers to Result:
   Every positive number before the negative one is added to the 'result' array using 'result.push(number)'.

6. Return the Result:
   The 'return result' line gives back the list of positive numbers it collected.

Example Walkthrough:
  * Step 1: Look at '45'. It’s positive, so it’s added to 'result'.
    Now, 'result = [45]'.
  * Step 2: Look at '87'. It’s positive, so it’s added to 'result'.
    Now, 'result = [45, 87]'.
  * Step 3: Look at '96'. It’s positive, so it’s added to 'result'.
    Now, 'result = [45, 87, 96]'.
  * Step 4: Look at '11'. It’s positive, so it’s added to 'result'.
    Now, 'result = [45, 87, 96, 11]'.
  * Step 5: Look at '63'. It’s positive, so it’s added to 'result'.
    Now, 'result = [45, 87, 96, 11, 63]'.
  * Step 6: Look at '-56'. It’s negative, so the loop stops.

  The final result is '[45, 87, 96, 11, 63]', which is printed out.

Simple Analogy:
Think of it like collecting good apples from a basket.
    * You keep picking apples (positive numbers) and adding them to your bag ('result').
    * As soon as you find a bad apple (negative number), you stop picking apples immediately and go home with only the good apples you’ve collected so far.
*/