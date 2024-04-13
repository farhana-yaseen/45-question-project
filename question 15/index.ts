
let guest = ["Aliza","Areesha","Kashaf","Sana","Rabia","Farheen"];
let message = "tommorrow we are throwing a acsual dinner party at my home and you are invite. Please come and join us.";


// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let absentGuest = guest.splice(4,1, "Fizza");


//Print a second set of invitation messages, one for each person who is still in your list.

for (let i of guest){
console.log(`Hello ${i}:\t ${message}`);
}


//Add a print statement at the end of your program stating the absent guest name.

console.log(`\n Absent Guest List : ${absentGuest}`);
