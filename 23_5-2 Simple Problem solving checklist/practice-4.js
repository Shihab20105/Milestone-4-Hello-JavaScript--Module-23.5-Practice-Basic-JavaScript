/*                          23_5-2 Simple Problem solving checklist and practice

                                      Practice - (4)

** Question 3:
 Count Paper, 'paperRequirements'. You must name the function exactly as it is written here. You are given 3 parameters:
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
*/