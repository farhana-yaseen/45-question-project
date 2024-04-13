
//  pizza names in a array, and then use a for loop to print the name of each pizza.

let favoritePizza = ["Chicken Fajita Pizza", "Smokey Bar bq Pizza", "Creamy Chicken Tikka Pizza"];
  

// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.


favoritePizza.forEach((answer)=>{

    console.log(`\n I Like "${answer}" flavour.`);
  })
  
  // Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
  console.log("\n I really like all kinds of chicken pizza")