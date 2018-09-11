var request = require("request");
var fs = require("fs");
var Spotify = require('node-spotify-api');
require('dotenv').config();
var keys = require("./keys.js");
 

var spotify = new Spotify (keys.spotify);

spotify.search({type: "track", query: str, limit: 1}).then(function(data){
  `${"Artist: " + data.artist} ${"Song Name: " + data.song} ${"Preview link to song on spotify: " + data.songlink} ${"Album the song is from: " + data.album}` 
});
          
fs.appendFile("log.txt", showData + divider, function(err) {
  if (err) throw err;
  console.log(showData);
  
});
module.exports = spotify;
//I need to get the spotify keys working to see the json data to finish the info for print screen
//also need to get the random.txt going.
//all my files append