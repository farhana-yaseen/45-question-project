// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
let magicianName = ["Harry Houdini", "David Blaine", "Uri Geller"];
console.log("\n Array result: ");
function show_magicians() {
    for (let m of magicianName) {
        console.log(m);
    }
}
function make_great() {
    let copyArray = [...magicianName]; //copy array by using the spread operator
    console.log("\n Copyed Array result:");
    for (let copy of copyArray)
        console.log(`The Great  ${copy}`);
}
//call function
show_magicians();
make_great();
export {};
