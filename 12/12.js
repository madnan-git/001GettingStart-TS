"use strict";
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let fName = ["Ahmed", "Ghulam Ali", "Mansoor", "Shujaat Ali"];
let mesage = "Hope you have a Good Day!";
fName.forEach((name) => {
    console.log(`My Friend ${name}, ${mesage}`);
});
