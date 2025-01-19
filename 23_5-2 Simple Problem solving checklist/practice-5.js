/*                          23_5-2 Simple Problem solving checklist and practice

                                      Practice - (5)

** Question 4:
 There will be many names in one array. For example ['Hasan', 'Jamal', 'Mohammad Yousuf', 'Mizan', 'Jubayer Bin Rasheed', 'Mamun', 'Kamal',]; . So your job is to write a function that does this 'bestFriend' and Return the name that is the largest among them. You must name the function exactly as it is written here which is 'bestFriend'.

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
*/