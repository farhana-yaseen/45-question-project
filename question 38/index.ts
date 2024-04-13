
// Write a function called describe_city() that accepts the name of a city and its country.
// function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.



function describe_city(city:string,country="Pakistan") {

  console.log(`\n ${city} is in ${country}`);

}

// Call your function for three different cities.

describe_city("Karachi");
describe_city("Islamabad");

//one of which is not in the default country.
describe_city("Ankara", "Turkey");

