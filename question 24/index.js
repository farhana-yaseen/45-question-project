"use strict";
//series of conditional tests
Object.defineProperty(exports, "__esModule", { value: true });
let favPlace = 'Karachi';
// Tests for equality and inequality with strings
console.log("Is favPlace === 'Karachi'? I predict true.");
console.log(favPlace === "Karachi");
console.log("Is favPlace !== 'Karachi'? I predict false.");
console.log(favPlace !== "Karachi");
// Tests using the lower case function
console.log("Is favPlace === 'karachi'? I predict true.");
console.log(favPlace.toLowerCase() === "karachi");
console.log("Is favPlace === 'Karachi'? I predict false.");
console.log(favPlace.toLowerCase() === "Karachi");
let a = 12;
let b = 9;
// Numerical tests involving equality and inequality
console.log("Is a = b  ? I predict false.");
console.log(a == b);
console.log("Is a != b  ? I predict false.");
console.log(a !== b);
// Numerical tests involving greater than and less than
console.log("Is a > b  ? I predict true.");
console.log(a > b);
console.log("Is a < b  ? I predict false.");
console.log(a < b);
// Numerical tests involving greater than or equal to, and less than or equal to
console.log("Is a >= b  ? I predict true.");
console.log(a >= b);
console.log("Is a <= b  ? I predict false.");
console.log(a <= b);
// Tests using "and" and "or" operators
console.log("Is a >= b && b <= a  ? I predict true.");
console.log(a >= b && b <= a);
console.log("Is a <= b && b <= a ? I predict false.");
console.log(a <= b && b >= a);
console.log("Is a >= b || b <= a  ? I predict true.");
console.log(a >= b || b <= a);
console.log("Is a <= b || b <= a ? I predict false.");
console.log(a <= b || b >= a);
// Test whether an item is in a array
let cities = ["karachi", "lahore", "islamabad"];
console.log(" Item is in a array...I predict true");
console.log(cities.includes("karachi"));
console.log(" Item is not in a array...I predict false");
console.log(cities.includes("peshawar"));
// Test whether an item is not in a array
