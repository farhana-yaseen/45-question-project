// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, 
// or anything else you’d like. Write a program that creates a list containing these items.
let countryName = ["Maldives", "Iceland", "Greece", "Switzerland", "Canada"];
console.log("\t\nCountries, I do like to visit:");
// Write a program that creates a list containing these items.
countryName.forEach((name, index) => {
    console.log(index + 1, name);
});
export {};
