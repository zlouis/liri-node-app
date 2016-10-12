
var getKeys = require('./keys.js');
var twitter = require('twitter');
var request = require('request');
var spotify = require('spotify');
var fs = require('fs');
console.log("=======");
// console.log(getKeys);

var nodeArgv=process.argv;
var userCommand= process.argv[2]
var x = "";
//attaches multiple word arguments
for (var i=3; i<nodeArgv.length; i++){
  if(i>3 && i<nodeArgv.length){
    x = x + "+" + nodeArgv[i];
  } else{
    x = x + nodeArgv[i];
  }
}
// console.log(getKeys.twitterKeys);


switch (userCommand) {
  case "my-tweets": 
        showTweets()
        break;

  case "spotify-this-song":
      if (x) {
      showSpotify(x);
      } else {
        spotify("Flourscent Adolescent")
      }
      break;
  case "movie-this":
      if (x) {
        showOmdb(x) }
       else {
        omdbData("Mr.NoBody")
      }
      break;

  case "do-what-it-says":
        doThing();
        break;

  default:
  console.log("Please enter a command: my-tweets, spotify-this-song, movie-this, do-what-it-says");
  break;
x`

}


///twitter

function showTweets() {
var client = new twitter ({
  consumer_key: 'eIZSRvch65EenpaRcRX7rcbZH',
  consumer_secret: 'hLW7NhGSG3Q8wqs8E1c2ldGmBBVeAbmUN8w4KQ9DiDeB53LBRq',
  access_token_key: '27452949-R0e8MGmxVXuGOlC4vVJyfTrePA6r7OmFkKpqqV0Rf',
  access_token_secret: '2Q7fvSt9L20TxldVgEIPyNVNvcU8sw1UXd3EFdgMNh4YS',
})

var params = {screen_name: 'zLouisH'};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

    for (var i=0; i<tweets.length; i++) {
        var date = tweets[i].created_at;
        console.log("zLouisH: " + tweets[i].text + " Created At: " + date.substring(0, 19));
        console.log("-----------------------");

        fs.appendFile("zLouisH: " + tweets[i].text + " Created At: " + date.substring(0, 19));

    }

   }
   else {
          console.log('Error occurred');
   }
});
}

/////omdb


function showOmdb(movie) {
var movieName=process.argv[3];



request('http://www.omdbapi.com/?t='+movieName+'&y=&plot=short&r&tomatoes=true&=json', function (error, response, body) {

  if (!error && response.statusCode == 200) {

    
    console.log("Movie Title: " + JSON.parse(body)['Title']);
    console.log("Release Aate: " + JSON.parse(body)['Year']);
    console.log("Imdb Rating: " + JSON.parse(body)['imdbRating']);
    console.log("Rotton Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
    console.log("Rotton Tomatoe's URL: " + JSON.parse(body)["tomatoURL"]);
    console.log("Language: " + JSON.parse(body)['language']);
    console.log("Plot: " + JSON.parse(body)['Plot']);
    console.log("Actors: " + JSON.parse(body)['Actors']);

    //adds to log.txt

    fs.appendFile('log.txt', "Title: " + body.Title);
    fs.appendFile('log.txt', 'Release date: ' + body.Year);
    fs.appendFile('log.txt', 'Imdb Rating: ' + body.ImdbRating);
    fs.appendFile('log.txt', 'Rotton Tomatoes Rating: ' + body.tomatoRating)
    fs.appendFile('log.txt', 'Rotton Tomatoes URL: ' + body.tomatoURL)
    fs.appendFile('log.txt', 'Language: ' + body.language);
    fs.appendFile('log.txt', 'Plot: ' + body.plot);
    fs.appendFile('log.txt', 'Actors: ' + body.Actors);

}

else {
  console.log("Error occured")
}

if ( movieName===null) {
       console.log("-----------------------");
      console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      console.log("It's on Netflix!");

      //adds text to log.txt
      fs.appendFile('log.txt', "-----------------------");
      fs.appendFile('log.txt', "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      fs.appendFile('log.txt', "It's on Netflix!");
}


  
});
}


///spotify 

function showSpotify(song) {
var songName=process.argv[3]

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {

    if (!err ) {

         for(var i = 0; i < data.tracks.items.length; i++){
        var songData = data.tracks.items[i];
        //artist
        console.log("Artist: " + songData.artists[0].name);
        //song name
        console.log("Song: " + songData.name);
        //spotify preview link
        console.log("Preview URL: " + songData.preview_url);
        //album name
        console.log("Album: " + songData.album.name);
        console.log("-----------------------");

        fs.appendFile('log.txt', "Artist: " + songData.artists[0].name)
        fs.appendFile('log.txt', "Artist: " + songData.name);
        fs.appendFile('log.txt', "Artist: " + songData.preview_url);
        fs.appendFile('log.txt', "Artist: " + songData.album.name);

    }
  }
  else {

    console.log("An Error Occured")
  }

});

}