//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let fName : string[] = ["Ahmed", "Ghulam Ali", "Mansoor", "Shujaat Ali"];
let mesage = "Hope you have a Good Day!"
fName.forEach((name: string) =>  {
    console.log(`My Friend ${name}, ${mesage}`)
})
