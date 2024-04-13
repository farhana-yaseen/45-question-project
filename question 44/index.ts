// Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number
// of arguments each time.


// In TypeScript, the rest parameter  ...items: string[] allows a function to accept an indefinite number of arguments as an array.
// When you use ... before the parameter name in a function declaration, it collects all the remaining arguments into an array.


function sandwichItems(...items:string[]){

console.log("\n Sandwich Order");
console.log(items);
}


 sandwichItems("Tomato","ketchup","Chicken", "Mayonnaise");
sandwichItems("Peanut Butter", "Jelly");
sandwichItems("Swiss Cheese", "Tomato", "Mayonnaise");