
var fs = require("fs");

var BANDS = require("./bands-in-town.js");
var bands = new BANDS();

var OMDB = require("./OMDB.js");
var movies = new OMDB();

var keys = require("./keys.js");
var Spotify = require("./spotify.js");
var spotify = new Spotify(keys.spotify);

var search = process.argv[2];

var term = process.argv.slice(3).join(" ");

if (!search) {
    search = "spotify-this-song";
}

if (!term) {
    term = "Ace of base";
}

if (search === "concert-this") {
    console.log("Searching for shows");
    bands.findBands(term);
}
if (search === "movie-this") {
    console.log("Searching for movies");
    movies.findMovies(term);
}
if (search === "spotify-this-song") {
    console.log("Searching for movies");
    spotify.findSong(term);
}
if (search === "i want it that way") {
    console.log("You asked for it!");
    
}