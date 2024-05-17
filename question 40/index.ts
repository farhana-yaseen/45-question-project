// Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. 
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.


// optional parameters indicated by the ? symbol after their names. 
// This allows you to call the function with fewer arguments without causing an error.

// interface is a way to define the shape or structure that an object should have.
interface Album {artistName:string, albumTitle:string, tracks?:number}


function make_album(artistName:string, albumTitle:string, tracks?:number){
  
  let album:Album = {artistName, albumTitle};   

  if (tracks){
    
    album['tracks'] = tracks;
      
  }
  return album;
}


console.log(make_album( "Atif Aslam",  "meri kahani"));

console.log(make_album("Ahmed Jahanzaib", "parastish", 12));

console.log(make_album("Sajjad Ali", "Teri yaad"));
