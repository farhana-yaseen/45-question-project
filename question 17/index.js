//previous program
let guest = ["Sana", "Rabia", "Farheen"];
let message = "tommorrow we are throwing a acsual dinner party at my home and you are invite. Please come and join us.";
//Exercise 16
//Add one new guest to the beginning of your array.
guest.unshift("Ayesha");
//Add one new guest to the middle of your array.
guest.splice(3, 0, "Zunaira");
//one new guest to the end of your list.
guest.push("Areesha");
//Exercise 17
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("\n Sorry!! I can invite only two people for dinner.\n");
//Remove guests from list
while (guest.length > 2) {
    let delGuest = guest.pop();
    console.log(`\n Dear ${delGuest}, Iam sorry you are not invite to dinner.`);
}
console.log(`\n Two people still in list:  ${guest}`);
//Print a message to each of the two people still on our list
for (let i of guest) {
    console.log(`\n Hello!!${i}: you are still invited to dinner`);
}
//Remove the last two names from list
guest.splice(0, 2);
console.log(` \n empty list: ${guest}`);
console.log(guest);
export {};
