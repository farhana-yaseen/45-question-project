// five places in the world i would like to visit.
let places = ["Maldives", "Iceland", "Greece", "Switzerland", "Canada"];
// array in its original order.
console.log("Array is in its original order: ", places);
// array in alphabetical order without modifying the actual list.
let alphabetical = places.toSorted();
console.log("Array in Alphabetical order without modifying the actual list: ", alphabetical);
// array is still in its original order.
console.log("Array is still in its original order: ", places);
// array in reverse alphabetical order without changing the order of the original list.
let reverse = places.toReversed();
console.log("Array is reverse alphabetical order without modifying the actual list: ", reverse);
// array is still in its original order.
console.log("Array is still in its original order", places);
// Reverse the order of list with modifying the actual list.
places.reverse();
console.log("Reverse the order of list with modifying the actual list: ", places);
// Reverse the order of list again.
places.reverse();
console.log("Reverse the order of list again: ", places);
// array in alphabetical order with modifying the actual list.
places.sort();
console.log("Alphabetical order with modifying the actual list: ", places);
// stored in reverse alphabetical order.
places.reverse();
console.log("Reverse alphabetical order of list again: ", places);
export {};
