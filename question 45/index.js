// Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
function createCar(manufacturer, modelName, ...option) {
    let car = {
        manufacturer,
        modelName
    };
    option.forEach(([keyword, value]) => {
        car[keyword] = value;
    });
    return car;
}
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
let carDetail = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2024]);
console.log(carDetail);
export {};
