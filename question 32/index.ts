// Make a list of five or more usernames called current_users.


let current_user = ["kashaf", "areesha", "sana", "zunaira", "fizza"]; 

// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let new_users:any = ["kashaf", "farheen", "rabia", "Zunaira", "fizza"];

// Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.


new_users.forEach((answer: any, index: any)=>{

    if (answer === current_user[index]){
        
             console.log("\n The person will need to enter a new username."); 
           }
           else {
               
               console.log("\n The user is available.");
          }      
})




