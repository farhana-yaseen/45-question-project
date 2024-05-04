// Make a list of five or more usernames called current_users.
let current_users = ["kashaf", "areesha", "Sana", "zunaira", "fizza"];
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["Kashaf", "farheen", "rabia", "zunaira", "fizza"];
// Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.• 
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// The some() method checks if any array elements pass a test (true,false) and does not change the original array.
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`\n ${newUser} The person will need to enter a new username.`);
    }
    else {
        console.log(`\n ${newUser} The user is available.`);
    }
});
export {};
