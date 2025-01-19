/*                          23_5-2 Simple Problem solving checklist and practice

                                      Practice - (3)

** Question 2:
 Centimeter to Meter, 'centimeterToMeter'. You must name the function exactly as it is written here. How much is 1000 centimeters in meters and  It will only return the number, how much is it?


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
*/