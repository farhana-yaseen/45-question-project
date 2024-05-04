// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list 
// at the end of your program.
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
// final guest list 
console.log(guest);
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("\n Sorry!! I can invite only two people for dinner.\n");
//Remove guests from list
while (guest.length > 2) {
    let delGuest = guest.pop();
    console.log(`\n Dear ${delGuest}: Iam sorry you are not invite to dinner.`);
}
console.log(`\n Two people still in list:  ${guest}`);
//Print a message to each of the two people still on our list
for (let i of guest) {
    console.log(`\n Hello!! ${i}: you are still invited to dinner`);
}
//Remove the last two names from list
guest.splice(0, 2);
console.log(` \n empty list: ${guest}`);
console.log(guest);
export {};
