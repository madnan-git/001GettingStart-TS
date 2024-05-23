// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// 1 Print your array in its original order.
// 2 Print your array in alphabetical order without modifying the actual list.
// 3 Show that your array is still in its original order by printing it.
// 4 Print your array in reverse alphabetical order without changing the order of the original list.
// 5 Show that your array is still in its original order by printing it again.
// 6 Reverse the order of your list. Print the array to show that its order has changed.
// 7 Reverse the order of your list again. Print the list to show it’s back to its original order.
// 8 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// 9 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let myFavPlaces: string[] = ["Madina Shrafi", "Jannat-ul-Baqi", "Gare-Hira", "Bagdad Sharif", "Saudi-Arab"];

console.log(`1. Original Arrage: ${myFavPlaces}`);
console.log(`2. Alphabetic Order: ${[...myFavPlaces].sort()}`);
console.log(`3. Original Order: ${myFavPlaces}`);
console.log(`4. Reverse Order: ${[...myFavPlaces].sort().reverse()}`);
console.log(`5. Original Arrage: ${myFavPlaces}`);
myFavPlaces.reverse();
console.log(`6. Reverse Order: ${myFavPlaces}`);
myFavPlaces.reverse();
console.log(`7. Reverse Order: ${myFavPlaces}`);
myFavPlaces.sort();
console.log(`8. Reverse Order: ${myFavPlaces}`);
myFavPlaces.reverse();
console.log(`9. Reverse Order: ${myFavPlaces}`);
