let countryName = ["Maldives", "Iceland", "Greece", "Switzerland", "Canada"];
console.log("\t\nCountries, I do like to visit:");
// Write a program that creates a list containing these items.
//for (let i of countryName){
// console.log(i);
// }
countryName.forEach((name, index) => {
    console.log(index + 1, name);
});
export {};
