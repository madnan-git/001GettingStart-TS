"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Equality Test
let fruit = "Mango";
console.log(fruit == "Mango"); // true
console.log(fruit == "MANGO"); // false
//Tests using the lower case function
let lang = "English";
console.log(lang.toLowerCase() == "english"); // true
console.log(lang.toUpperCase() == "ENGLISH"); // true
// Numerical tests
let num = 10;
console.log(num == 10); // true
console.log(num == 11); // false
console.log(num > 9); // true
console.log(num < 11); // true
console.log(num >= 10); // true
console.log(num <= 10); // true
// Tests using "and" and "or" operators
console.log(num == 10 && lang.toLowerCase() == "english"); // true
console.log(num == 10 || lang.toLowerCase() == "english"); // true
console.log(num == 10 && lang.toLowerCase() == "english" || lang.toUpperCase() == "ENGLISH"); // true
// Test whether an item is in a array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.includes(10)); // false
console.log(array.includes(11)); // flase
console.log(num == 10 && lang.toLowerCase() == "english" && array.includes(10)); // false
console.log(num == 10 && lang.toLowerCase() == "english" || array.includes(10));
"english"; // true
// Test whether an item is not in a array
console.log(!array.includes(10)); // true
console.log(!array.includes(7)); // false
console.log(num == 10 && lang.toLowerCase() == "english" && !array.includes(7)); // false
