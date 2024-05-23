//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guest_List: string[] = ["Ammad", "Naeem","Salam", "Qader"];
console.log(`Old Guest List:  ${guest_List} \n`);

let na_list: string = "Salam"; // Guest who can't make it
let newGuest: string = "Shafiq"; // New guest to invite

guest_List[guest_List.indexOf(na_list)] = newGuest

guest_List.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
})

export{}