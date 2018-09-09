require('dotenv').config();

var BANDS = require("./bands-in-town.js");
var bands = new BANDS();

var OMDB = require("./OMDB.js");
var movies = new OMDB();

//var spotify = new SPOTIFY(keys.spotify);

var search = process.argv[2];

var term = process.argv.slice(3).join(" ");

if (!search) {
    search = "band";
}

if (!term) {
    term = "Tool";
}

if (search === "concert-this") {
    console.log("Searching for shows");
    bands.findBands(term);
}
if (search === "movie-this") {
    console.log("Searching for movies");
    movies.findMovies(term);
} 