
let guest = ["Sana", "Rabia", "Farheen"];
let message = "tommorrow we are throwing a acsual dinner party at my home and you are invite. Please come and join us.";

//Add one new guest to the beginning of your array.
guest.unshift("Ayesha");


//Add one new guest to the middle of your array.
guest.splice(2,0, "Zunaira");



//one new guest to the end of your list.
guest.push("Areesha");

// Print a new set of invitation messages, one for each person in your list.

for (let i of guest){
console.log(`\n Hello ${i}:\t ${message}`);
}

console.log(`\n Total Guest: ${guest}`);


// Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log("I found a bigger dinner table.");




