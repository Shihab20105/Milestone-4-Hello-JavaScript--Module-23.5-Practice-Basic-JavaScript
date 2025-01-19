/*                          23_5-1 Basic Javascript concept checklist and practice
                                          Summary - (6)
                                     Milestone - 4 Summary 
                            What have we learned in Milestone - 4?

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


** Miles to Kilometer:

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


** Checked if a number is 'even' or 'odd'.

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


** Checked if a year is a leap year.

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
*/