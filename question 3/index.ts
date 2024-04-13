
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let fname = "kashaf";

// convert person's name into lowercase

console.log(fname.toLowerCase());


// convert person's name into uppercase

console.log(fname.toUpperCase());


// convert person's name into titlecase

let titleCase = fname.charAt(0).toUpperCase()+ fname.slice(1);
console.log(titleCase);


