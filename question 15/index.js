// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
let guest = ["Aliza", "Areesha", "Kashaf", "Sana", "Rabia", "Farheen"];
let message = "tommorrow we are throwing a acsual dinner party at my home and you are invite. Please come and join us.";
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//The splice() method adds and/or removes array elements and overwrites the original array. splice(index, del, replace)
let absentGuest = guest.splice(4, 1, "Fizza");
//Print a second set of invitation messages, one for each person who is still in your list.
for (let i of guest) {
    console.log(`Hello ${i}:\t ${message}`);
}
//Add a print statement at the end of your program stating the absent guest name.
console.log(`\n Absent Guest List : ${absentGuest}`);
export {};
