
var getKeys = require('./keys.js');

console.log("=======");
console.log(getKeys);

// console.log(getKeys.twitterKeys);





///twitter
var twitter = require('twitter');

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
    }

        // console.log(JSON.parse(response.body));
        // console.log(tweets.created_at)
        // console.log(tweets.text)
    // for (var i=0;i<tweets.length;i++) {
   }
   else {
          console.log('Error occurred');
   }


  
});










/////omdb
var request = require('request');

// var node2=process.argv[];
var movieName=process.argv[2]; // input name of movie



request('http://www.omdbapi.com/?t='+movieName+'&y=&plot=short&r&tomatoes=true&=json', function (error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode == 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it). 
    console.log("Movie Title: " + JSON.parse(body)['Title']);
    console.log("Release date: " + JSON.parse(body)['Year']);
    console.log("Imdb rating: " + JSON.parse(body)['imdbRating']);
    console.log("Rotton Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
    console.log("Rotton Tomatoe's URL: " + JSON.parse(body)["tomatoURL"]);
    console.log("Language: " + JSON.parse(body)['language']);
    console.log("Plot: " + JSON.parse(body)['Plot']);
    console.log("Actors: " + JSON.parse(body)['Actors']);

    // console.log(JSON.parse(body))

}

// else {
//   console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/")
// }

});



///spotify 

// node liri.js spotify-this-song '<song name here>'

// This will show the following information about the song in your terminal/bash window

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// if no song is provided then your program will default to

// "The Sign" by Ace of Base



var spotify = require('spotify');

var songName=process.argv[2]

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {

    if (!err ) {

    //      for(var i = 0; i < data.tracks.items.length; i++){
    //     var songData = data.tracks.items[i];
    //     //artist
    //     console.log("Artist: " + songData.artists[0].name);
    //     //song name
    //     console.log("Song: " + songData.name);
    //     //spotify preview link
    //     console.log("Preview URL: " + songData.preview_url);
    //     //album name
    //     console.log("Album: " + songData.album.name);
    //     console.log("-----------------------");


    // }
  }
 
  // console.log(album.name)
               console.log(data.body)



});

///