let magicianName = ["Harry Houdini", "David Blaine", "Uri Geller"];
function show_magicians() {
    for (let m of magicianName) {
    }
    return make_great();
}
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
function make_great() {
    magicianName.forEach((text) => {
        text = `The Great  ${text}`;
        console.log(text);
    });
}
//Call show_magicians() to see that the list has actually been modified.
show_magicians();
export {};
