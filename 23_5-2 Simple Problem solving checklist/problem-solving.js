/*                          23_5-2 Simple Problem solving checklist and practice */

/*                          Problem Practice

** Question 1: Feet to inch, 'feetToInch'. You must name the function exactly as it is written here. How many inches are in 15 feet?

** Question 2: Centimeter to Meter, 'centimeterToMeter'. You must name the function exactly as it is written here. How much is 1000 centimeters in meters and  It will only return the number, how much is it?

** Question 3. Count Paper, 'paperRequirements'. You must name the function exactly as it is written here. You are given 3 parameters:
Count Paper:
book1: 100 pages
book2: 200 pages
book3: 300 pages

That is, it will take three parameters. 
* With the first parameter you will indicate that, How many copies of the first book do you want? for first I want 50 copies.
* The second parameter is that, How many copies of book number two do you want? for the second I want 20 books.
* The third parameter is that, How many copies of book number three do you want? for the third I want 14 books.
How much paper will I need overall for this three books You need to find out?
/ ------------------------------------------------------------------------------------------------------------- /

Question:
You must write a function named 'paperRequirements' exactly as written. The function will take three parameters representing the number of copies required for three books. The page counts for each book are fixed as follows:

* Book 1: 100 pages
* Book 2: 200 pages
* Book 3: 300 pages

Input:
* The first parameter represents how many copies of Book 1 are needed.
* The second parameter represents how many copies of Book 2 are needed.
* The third parameter represents how many copies of Book 3 are needed.

Example:
If you need 50 copies of Book 1, 20 copies of Book 2, and 14 copies of Book 3, how much paper is required in total?

Output:
Calculate and return the total number of pages needed to print all the requested copies of the three books.

** Question 4: There will be many names in one array. For example ['Hasan', 'Jamal', 'Mohammad Yousuf', 'Mizan', 'Jubayer Bin Rasheed', 'Mamun', 'Kamal',]; . So your job is to write a function that does this 'bestFriend' and Return the name that is the largest among them. You must name the function exactly as it is written here which is 'bestFriend'.

** Question 5: There will be an array, it will have many numbers in it and there will be positive and negative numbers. For example [45, 87, 96, 11, 63, -56, 71, 28]; . If a negative number ever comes up, the loop will stop at that point and It will return all the numbers found until it is stops. You have to declare a function which is 'onlyPositive'. 
* You will pass an array like this as an input parameter to a function.
* After this, your task will be to take each element from this array until, when you get a negative number which has a value less than 0, then you have to stop the loop immediately, then all the elements found so far, you will return them as an array.



/ ----------------------------------------------------------------------------------------------------------  /

** Question 1: Feet to inch, 'feetToInch'. You must name the function exactly as it is written here. How many inches are in 15 feet?

The function named exactly as 'feetToInch' should convert feet to inches. Here's the solution and how to calculate how many inches are in 15 feet:

function feetToInch(feet){
    return feet *12;
}
const result = feetToInch(15);
console.log(result);
Output: 180
/ ------------------------------------------------------------------------------------------------------------- /


function feetToInch(feet) {
    return feet * 12;  // 1 foot = 12 inches
  }
  
const result = feetToInch(15);  // Convert 15 feet to inches
console.log(result);
Output: 180 


** In the function 'feetToInch(feet)', the part inside the parentheses ('feet') is called a parameter. Here’s what it represents and why it’s important:

Explanation:

1. Parameter Definition:

    * 'feet' is a placeholder or a variable that represents the input the function will receive when it is called.
    * This parameter allows the function to work with different values, not just a fixed number.

2. Functionality:

    * When you call the function, you pass a value (known as an argument) to the parameter 'feet'.
    * The function uses this value inside its code to perform calculations or actions.

Example Breakdown:

function feetToInch(feet) {  // 'feet' is a parameter
  return feet * 12;          // The parameter 'feet' is used in the calculation
}

const result = feetToInch(15);  // 15 is the argument passed to the function
console.log(result);
Output: 180

Key Terms:
    * Parameter (feet): A variable used in the function definition.
    * Argument (15): The actual value passed when calling the function.
    * 
This design allows the function to convert any number of feet to inches, making it reusable and flexible.


function feetToInch(feet) {
    return feet * 12;  // 1 foot = 12 inches
  }
  
const myFeet = 15;  // Number of feet
const result = feetToInch(myFeet);  // Convert feet to inches
console.log(result);  // Output: 180



function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const tomsInches = 168;
const tomsFeet = inchToFeet(tomsInches);
console.log('Tom Feet', tomsFeet);
Output: Tom Feet 14
* It converts inches to feet by dividing the input inches by 12, and the output for 168 inches is 14 feet, which is accurate.

Here’s a brief breakdown:

* 'inchToFeet' function takes a parameter 'inches'.
* It divides 'inches' by 12 to convert to feet.
* The function is called with '168' inches, and the result (14) is logged to the console.
/ ----------------------------------------------------------------------------------------------------------- /


function feetToInch(feet){
    const inches = feet * 12;
    return inches;
}

const tomsFeet = 15;
const tomsInches = feetToInch(tomsFeet);
console.log('Toms Inches', tomsInches);
Output: Toms Inches 180

** break down your code in more detail, step-by-step, so you fully understand how everything works.

Step 1: Function Definition:

function feetToInch(feet) {
    const inches = feet * 12;
    return inches;
}

* Function Name: 'feetToInch' – This is the name of the function you were asked to create. The name must be exactly as written.
* Parameter: ('feet') – This is a placeholder variable that the function uses to receive input (the number of feet).
* Calculation: 'const inches = feet * 12;' – The number of feet is multiplied by 12 because there are 12 inches in 1 foot.
* Return Statement: 'return inches;' – This sends the result (the number of inches) back to wherever the function is called.

Step 2: Calling the Function:

const tomsFeet = 15;
const tomsInches = feetToInch(tomsFeet);

* Variable 'tomsFeet': This stores the value '15', representing how many feet you want to convert.
* Calling 'feetToInch(tomsFeet)':
    * The function is called with '15' as the argument (input).
    * Inside the function, 'feet = 15', so the calculation is 15 * 12 = 180.
        *feetToInch(tomsFeet) means:
            * 'tomsFeet' contains '15'.
            * So, when calling 'feetToInch(tomsFeet)', it’s like writing 'feetToInch(15)'. 
    * The result (180) is returned by the function and stored in 'tomsInches'.

Step 3: Output:

console.log('Toms Inches', tomsInches);

* 'console.log('Toms Inches', tomsInches);' prints the message "Toms Inches" followed by the value of 'tomsInches' (which is '180').

* The final output will be:
Toms Inches 180

Summary of How It Works:

1. Function: 'feetToInch(feet)' converts feet into inches by multiplying the input by 12.
2. Calling the Function: 'feetToInch(tomsFeet)' sends '15' into the function, performs the calculation, and returns '180'.
3. Result: The result (180) is stored in 'tomsInches' and printed.

Why This is Useful:

* Reusable Code: You can use 'feetToInch()' with any number of feet by changing the input:

console.log(feetToInch(5));  // Output: 60
console.log(feetToInch(10)); // Output: 120

* Dynamic Input: The function is flexible and works with different values without changing its core code. This saves time and reduces errors.

Conclusion:

* Your code follows best practices, and the function works correctly.
* The 'feet' parameter allows the function to handle various inputs dynamically.
* Multiplying by '12' converts feet to inches accurately, and 'return' gives back the result for use elsewhere.



/ ------------------------------------------------------------------------------------------------------------- /
** Question 2: Centimeter to Meter, 'centimeterToMeter'. You must name the function exactly as it is written here. How much is 1000 centimeters in meters and  It will only return the number, how much is it?


function centimeterToMeter(centimeters){
    const meter = centimeters / 100;
    return meter;
}

const tomsCentimeter = 1000;
const tomsMeter = centimeterToMeter(tomsCentimeter);
console.log('Toms Meter', tomsMeter);
Output: Toms Meter 10
/ ------------------------------------------------------------------------------------------------------------ /


function centimeterToMeter(centimeters){
    const meter = centimeters / 100;
    return meter;
}

const tomsCentimeter = 1000;
const tomsMeter = centimeterToMeter(tomsCentimeter);
console.log(tomsMeter);
Output: 10
/ ------------------------------------------------------------------------------------------------------------- /


function centimeterToMeter(centimeters) {
    const meter = centimeters / 100;  // Correct formula: 1 meter = 100 centimeters
    return meter;                     // Return the converted value
}

const tomsCentimeter = 1000;           // tomsCentimeter is set to 1000
const tomsMeter = centimeterToMeter(tomsCentimeter);  // Function call to convert centimeters to meters
console.log(tomsMeter);                // Prints the result to the console
Output: 10

Why It Works:
* The function 'centimeterToMeter' correctly divides the input 'centimeters' by '100' to convert to meters.
* 'tomsCentimeter' is passed as '1000', so '1000 / 100' returns '10'.
* 'console.log(tomsMeter)' prints the value '10' to the console.



/ ------------------------------------------------------------------------------------------------------------ /
** Question 3. Count Paper, 'paperRequirements'. You must name the function exactly as it is written here. You are given 3 parameters:
Count Paper:
book1: 100 pages
book2: 200 pages
book3: 300 pages

That is, it will take three parameters. 
* With the first parameter you will indicate that, How many copies of the first book do you want? for first I want 50 copies.
* The second parameter is that, How many copies of book number two do you want? for the second I want 20 books.
* The third parameter is that, How many copies of book number three do you want? for the third I want 14 books.
How much paper will I need overall for this three books You need to find out?


function paperRequirements(book1Copies, book2Copies, book3Copies) {
    // Define the number of pages required for each book
    const pagesPerBook1 = 100;
    const pagesPerBook2 = 200;
    const pagesPerBook3 = 300;

    // Calculate total pages needed for each book
    const totalPagesForBook1 = book1Copies * pagesPerBook1;
    const totalPagesForBook2 = book2Copies * pagesPerBook2;
    const totalPagesForBook3 = book3Copies * pagesPerBook3;

    // Calculate total pages needed overall
    const totalPaperNeeded = totalPagesForBook1 + totalPagesForBook2 + totalPagesForBook3;

    // Return the total paper needed
    return totalPaperNeeded;
}

// Example usage with the provided values:
const book1Copies = 50;
const book2Copies = 20;
const book3Copies = 14;
const result = paperRequirements(book1Copies, book2Copies, book3Copies);

console.log(`Total paper needed: ${result}`);
// Output: Total paper needed: 13200
/ ------------------------------------------------------------------------------------------------------------- /


function calculatePagesForBook1(book1Copies) {
    const pagesPerBook1 = 100;
    return book1Copies * pagesPerBook1;
}

function calculatePagesForBook2(book2Copies) {
    const pagesPerBook2 = 200;
    return book2Copies * pagesPerBook2;
}

function calculatePagesForBook3(book3Copies) {
    const pagesPerBook3 = 300;
    return book3Copies * pagesPerBook3;
}

function paperRequirements(book1Copies, book2Copies, book3Copies) {
    const totalPagesForBook1 = calculatePagesForBook1(book1Copies);
    const totalPagesForBook2 = calculatePagesForBook2(book2Copies);
    const totalPagesForBook3 = calculatePagesForBook3(book3Copies);

    const totalPaperNeeded = totalPagesForBook1 + totalPagesForBook2 + totalPagesForBook3;

    return totalPaperNeeded;
}

// Example usage with the provided values:
const book1Copies = 50;
const book2Copies = 20;
const book3Copies = 14;
const result = paperRequirements(book1Copies, book2Copies, book3Copies);

console.log(`Total paper needed: ${result}`);
/ ------------------------------------------------------------------------------------------------------------ /


function paperRequirements(book1Copies, book2Copies, book3Copies) {
    const pagesPerBook1 = 100;
    const pagesPerBook2 = 200;
    const pagesPerBook3 = 300;

    function calculatePages(copies, pagesPerBook) {
        return copies * pagesPerBook;
    }

    const totalPagesForBook1 = calculatePages(book1Copies, pagesPerBook1);
    const totalPagesForBook2 = calculatePages(book2Copies, pagesPerBook2);
    const totalPagesForBook3 = calculatePages(book3Copies, pagesPerBook3);

    const totalPaperNeeded = totalPagesForBook1 + totalPagesForBook2 + totalPagesForBook3;

    return totalPaperNeeded;
}

// Example usage with the provided values:
const book1Copies = 50;
const book2Copies = 20;
const book3Copies = 14;
const result = paperRequirements(book1Copies, book2Copies, book3Copies);

console.log(`Total paper needed: ${result}`);
// Output: Total paper needed: 13200
/ ------------------------------------------------------------------------------------------------------------ /


function paperRequirements(book1Copies, book2Copies, book3Copies){
    const pagesPerBook1 = 100;
    const pagesPerBook2 = 200;
    const pagesPerBook3 = 300;

    const totalPagesForBook1 = book1Copies * pagesPerBook1;
    const totalPagesForBook2 = book2Copies * pagesPerBook2;
    const totalPagesForBook3 = book3Copies * pagesPerBook3;

    const totalPaperNeeded = totalPagesForBook1 + totalPagesForBook2 + totalPagesForBook3;
    return totalPaperNeeded;
}

const book1Copies = 50;
const book2Copies = 20;
const book3Copies = 14;

const result = paperRequirements(book1Copies, book2Copies, book3Copies);
console.log(`Total Paper Needed: ${result}`);
// Output: Total Paper Needed: 13200



/ ------------------------------------------------------------------------------------------------------------- /
** Question 4: There will be many names in one array. For example ['Hasan', 'Jamal', 'Mohammad Yousuf', 'Mizan', 'Jubayer Bin Rasheed', 'Mamun', 'Kamal',]; . So your job is to write a function that does this 'bestFriend' and Return the name that is the largest among them. You must name the function exactly as it is written here which is 'bestFriend'.

function bestFriend(names){
    if (!Array.isArray(names) || names.length === 0){
        return 'Please provide a valid array of names.';
    }
    let largestName = names[0];

    for(let i = 1; i < names.length; i++){
        if(names[i].length > largestName.length){
            largestName = names[i];
        }
    }

    return largestName;
}

const friends = ['Hasan', 'Jamal', 'Mohammad Yousuf', 'Mizan', 'Jubayer Bin Rasheed', 'Mamun', 'Kamal',];
console.log(bestFriend(friends));
// Output: Jubayer Bin Rasheed
/ ------------------------------------------------------------------------------------------------------------- /


function bestFriend(names) {
  if (!Array.isArray(names) || names.length === 0) {
    return "Please provide a valid array of names.";
  }

  let largestName = names[0]; // Start with the first name

  for (let i = 1; i < names.length; i++) {
    if (names[i].length > largestName.length) {
      largestName = names[i]; // Update if current name is longer
    }
  }

  return largestName; // Return the largest name
}

// Example usage
const friends = ['Hasan', 'Jamal', 'Mohammad Yousuf', 'Mizan', 'Jubayer Bin Rasheed', 'Mamun', 'Kamal'];
console.log(bestFriend(friends)); 
// Output: Jubayer Bin Rasheed

Explanation:
1. The 'bestFriend' function takes a parameter 'names', expected to be an array of names.
2. '!Array.isArray(names)' ensures the input is an array, and 'names.length === 0' checks if it’s empty.
3. A 'for' loop starts at the second element (index 1) to compare name lengths.
4. The longest name found is stored in 'largestName'.
5. The function returns the longest name after completing the loop.


What Is the Goal?
We have a list of names, like:

['Hasan', 'Jamal', 'Mohammad Yousuf', 'Mizan', 'Jubayer Bin Rasheed', 'Mamun', 'Kamal']
We want to find the longest name in this list using a function called 'bestFriend'.

Step 1: Define the Function:
We create a function called 'bestFriend' that will take an array of names as input.


function bestFriend(names) {

Step 2: Check if the Input is Valid:
We check if:

* The input is actually an array.
* The array is not empty (it must have at least one name).

if (!Array.isArray(names) || names.length === 0) {
  return "Please provide a valid array of names.";
}

* 'Array.isArray(names)' checks if 'names' is an array.
* '!' means "not," so '!Array.isArray(names)' means "names is not an array."
* If the input is not valid, we return a message instead of running the rest of the function.

Step 3: Start with the First Name:
We assume the first name is the longest name for now.

let largestName = names[0];

Step 4: Loop Through All Names:
We check each name in the list one-by-one to see if it is longer than the current 'largestName'. If we find a longer name, we update 'largestName' with that name.

for (let i = 1; i < names.length; i++) {
  if (names[i].length > largestName.length) {
    largestName = names[i];  // Update to the longer name
  }
}

* 'names[i]' is the name at position 'i' in the list.
* '.length' gives the length of a name.
* If the current name is longer, we set 'largestName' to that name.

Step 5: Return the Longest Name:
Finally, after checking all the names, we return 'largestName'.

return largestName;

Example in Action

const friends = ['Hasan', 'Jamal', 'Mohammad Yousuf', 'Mizan', 'Jubayer Bin Rasheed', 'Mamun', 'Kamal'];
console.log(bestFriend(friends));  
// Output: Jubayer Bin Rasheed

Simple Summary:
1. We assume the first name is the longest.
2. We look at each name in the list.
3. If we find a longer name, we update the longest name.
4. After checking all names, we return the longest one!
/ ------------------------------------------------------------------------------------------------------------ /

function bestFriend(names) {
  if (!Array.isArray(names) || names.length === 0) {
    return "Please provide a valid array of names.";
  }
  
  return names.reduce((largest, current) => current.length > largest.length ? current : largest, names[0]);
}

// Example usage
const friends = ['Hasan', 'Jamal', 'Mohammad Yousuf', 'Mizan', 'Jubayer Bin Rasheed', 'Mamun', 'Kamal'];
console.log(bestFriend(friends)); 
// Output: Jubayer Bin Rasheed

Explanation:
* 'reduce()' iterates through the array, comparing the length of the current name with the longest name found so far.
* The function returns the name with the most characters by continuously updating the longest name.


/ ------------------------------------------------------------------------------------------------------------- /
** Question 5: There will be an array, it will have many numbers in it and there will be positive and negative numbers. For example [45, 87, 96, 11, 63, -56, 71, 28]; . If a negative number ever comes up, the loop will stop at that point and It will return all the numbers found until it is stops. You have to declare a function which is 'onlyPositive'. 
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