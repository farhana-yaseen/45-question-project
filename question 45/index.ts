
// Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 


interface objType {
  manufacturer: string;
  modelName: string;
  [keyword:string]: any;         
}


function createCar(manufacturer:string,modelName:string, ...option: [string,any][]) {
  let car:objType = {
    manufacturer,
    modelName
  }
  option.forEach(([keyword,value])=>{
    car[keyword] = value;
  })
  return car;
  }
  
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

let carDetail:objType = createCar( "Toyota", "Corolla", ["color", "blue"], ["year", 2024]);


console.log(carDetail);
