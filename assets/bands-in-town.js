var request = require("request");
var fs = require("fs");
var dayjs = require("dayjs");
var BANDS = function() {
    var divider = "\n----------------------------------\n\n";
    this.findBands = function(band) {
        var URL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";
    
        request(URL, function(err, response, body) {
          
          var jsonData = JSON.parse(body);
            console.log(URL);
            console.log(jsonData);
          
          var showData = [
            "Venue: " + jsonData[0].venue.name,
            "Venue Location: " + jsonData[0].venue.city,
            "Date of Event: " + dayjs(jsonData[0].datetime).format("MM/DD/YYYY"),
          ].join("\n\n");
    
          
          fs.appendFile("log.txt", showData + divider, function(err) {
            if (err) throw err;
            console.log(showData);
          });
        });
      };
}
module.exports = BANDS;