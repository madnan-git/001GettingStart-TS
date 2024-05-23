//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let p_Name : string = "mUHammAD adNAN qAdri";

// UPPER CASE
let u_Case : string = p_Name.toUpperCase();
console.log(u_Case);

// LOWER CASE
let l_Case : string = p_Name.toLowerCase();
console.log(l_Case);

// TITLE CASE
let words : string[] = p_Name.split(" ");
//console.log(words);
let t_Case: string = "";
for (let i = 0 ; i < words.length; i++) {
    t_Case += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " "
};

console.log(t_Case)

