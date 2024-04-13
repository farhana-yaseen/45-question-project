
//  Store the numbers 1 through 9 in a array.

let ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 


// Loop through the array.

//  Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
//Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

ordinal.forEach((answer)=>{

  if (answer === 1){
    console.log(`${answer} 1st`);
  }
  if (answer === 2){
    console.log(`${answer} 2nd`);
  }
  if (answer === 3){
    console.log(`${answer} 3rd`);
  }
  if (answer === 4){
    console.log(`${answer} 4th`);
  }
  if (answer === 5){
    console.log(`${answer} 5th`);
  }
  if (answer === 6){
    console.log(`${answer} 6th`);
  }
  if (answer === 7){
    console.log(`${answer} 7th`);
  }
  if (answer === 8){
    console.log(`${answer} 8th`);
  }
  if (answer === 9){
    console.log(`${answer} 9th`);
  }


  


})