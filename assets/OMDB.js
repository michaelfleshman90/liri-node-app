var request = require("request");
var fs = require("fs");

var OMDB = function() {
    var divider = "\n----------------------------------\n\n";
    this.findMovies = function(movie) {
        var URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        request(URL, function(err, response, body) {
          
          var jsonData = JSON.parse(body);
            console.log(URL);
            console.log(jsonData);
          
          var showData = [
            "Movie Title: " + jsonData.Title,
            "Release Year: " + jsonData.Year,
            "IMDB Rating: " + jsonData.imdbRating,
            "Rotten Tomatoes Rating: " + jsonData.Ratings[1],
            "Country of Origin: " + jsonData.Country,
            "Language of the Movie: " + jsonData.Language,
            "Movie Plot: " + jsonData.Plot,
            "Actors in the Movie: " + jsonData.Actors
          ].join("\n\n");
    
          
          fs.appendFile("log.txt", showData + divider, function(err) {
            if (err) throw err;
            console.log(showData);
          });
        });
      };
}
module.exports = OMDB;
