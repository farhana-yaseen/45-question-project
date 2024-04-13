
//  print a greeting to each user in the array through loop 

let greeting = ["Kashaf", "Areesha", "Admin", "Zunaira", "Fizza"]; 


for (let name of greeting){
   
    if (name === "admin"){           
        console.log("Hello admin: would you like to see a status report? \n")
    }
    else{ 
        console.log(`${name}: Thank you for logging in again \n`);
    }
}


