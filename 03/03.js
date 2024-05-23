"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let p_Name = "mUHammAD adNAN qAdri";
// UPPER CASE
let u_Case = p_Name.toUpperCase();
console.log(u_Case);
// LOWER CASE
let l_Case = p_Name.toLowerCase();
console.log(l_Case);
// TITLE CASE
let words = p_Name.split(" ");
//console.log(words);
let t_Case = "";
for (let i = 0; i < words.length; i++) {
    t_Case += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(t_Case);
