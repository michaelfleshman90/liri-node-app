var request = require("request");
var fs = require("fs");
var Spotify = require('node-spotify-api');
 

 

var spotify = function() {
    var divider = "\n----------------------------------\n\n";
    this.findSong = function(song) {
        var URL = "https://api.spotify.com/v1/" + song;

        request(URL, function(err, response, body) {
          
          var jsonData = JSON.parse(body);
            console.log(URL);
            console.log(jsonData);
          
          var showData = [
            "Artist: " + jsonData.Title,
            "The songs name: " + jsonData.Year,
            "Preview of song from spotify: " + jsonData.imdbRating,
            "Album that the song is from: " + jsonData.Ratings[1],
          ].join("\n\n");
    
          
          fs.appendFile("log.txt", showData + divider, function(err) {
            if (err) throw err;
            console.log(showData);
          });
        });
      };
}
module.exports = spotify;
//I need to get the spotify keys working to see the json data to finish the info for print screen
//also need to get the random.txt going.
//all my files append