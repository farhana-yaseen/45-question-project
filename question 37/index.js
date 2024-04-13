// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
function make_shirts(size = "large", message = "I love TypeScript") {
    console.log(`\n A ${size} Sized shirt with message ${message}`);
}
//Call the function.
// Making a large shirt with the default message
make_shirts();
// Making a medium shirt with the default message
make_shirts("medium");
// Making a shirt of any size with a different message
make_shirts("small", "Hello, TypeScript!");
export {};
