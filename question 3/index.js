// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let fname = "kasHaf";
// convert person's name into lowercase
console.log(fname.toLowerCase());
// convert person's name into uppercase
console.log(fname.toUpperCase());
// convert person's name into titlecase
// charAt() Return the first character (0) of a string
// slice() extracts a part of a string and returns the extracted part
let titleCase = fname.charAt(0).toUpperCase() + fname.slice(1).toLocaleLowerCase();
console.log(titleCase);
export {};
