// Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this: "Lahore, Pakistan"
function city_country(city, country) {
    return `\n ${city}, ${country}`;
}
// Call your function with at least three city-country pairs, and print the value that’s returned.
let city1 = city_country("Karachi", "Pakistan");
let city2 = city_country("Islamabad", "Pakistan");
let city3 = city_country("Lahore", "Pakistan");
console.log(city1);
console.log(city2);
console.log(city3);
export {};
