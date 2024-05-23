"use strict";
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
//*list of transportation in array
let transport = [];
//push transportation in array
transport.push("Toyota Car");
transport.push("Honda Motercycle");
transport.push("Sohraab Bicycle");
//print using for each loop
transport.forEach((item) => {
    console.log(`I would like to own a ${item}`);
});
