// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.


let guest_List: string[] = ["Ammad", "Naeem","Shafiq", "Qader"];
console.log(`Hi, I have found a bigger Dinner Table`);

guest_List.unshift("Aadil Khan");
guest_List.splice(guest_List.length/2, 0, "Naeem ur Rehman");
guest_List.push("Zia Ali");
console.log(guest_List);

guest_List.forEach(guest =>{
    console.log(`Dear Mr. ${guest} I would like to invit you on dinner.`);
})
//console.log(guest_List);