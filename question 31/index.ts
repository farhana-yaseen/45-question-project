

// If the list is empty, print the message We need to find some users!

// Remove all of the usernames from your array, and make sure the correct message is printed.

// The splice() method adds and/or removes array elements. The splice() method overwrites the original array.

let user = ["Kashaf", "Areesha", "Admin", "Zunaira", "Fizza"]; 

console.log(user);


let emptyList = user.splice(user.length);

if (user === emptyList){

    console.log("\n We don't need to find users!"); 

}
else {
    
    console.log("\n We need to find some users!"); 
}
