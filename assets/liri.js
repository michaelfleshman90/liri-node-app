require('dotenv').config();
var BANDS = require("./bands-in-town.js");

var bands = new BANDS();

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
  } else {
    console.log("No show for you");
  }