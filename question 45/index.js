// Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
function createCar(manufacturer, modelName, ...options) {
    let car = {
        manufacturer,
        modelName,
    };
    options.forEach(([keyword, value]) => {
        car[keyword] = value; // Using square bracket notation to dynamically assign properties
    });
    return car;
}
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
let carDetail = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2024]);
console.log(carDetail);
export {};
