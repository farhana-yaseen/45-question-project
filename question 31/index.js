// If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.
let user = ["Kashaf", "Areesha", "Admin", "Zunaira", "Fizza"];
console.log(user);
let emptyList = user.splice(user.length);
if (user !== emptyList) {
    console.log("\n We need to find some users!");
}
export {};
