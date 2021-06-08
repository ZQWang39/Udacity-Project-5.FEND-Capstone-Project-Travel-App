var path = require('path')
// Require Express to run server and routes
const express = require('express')
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
// Start up an instance of app
const app = express();

//To encrypt API key
const dotenv = require('dotenv');
dotenv.config();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));


console.log(__dirname);


app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});



// APIs//

//Geoname API //
const baseGeonameURL = "http://api.geonames.org/searchJSON?q";
const userName = process.env.GEO_UserName;
// POST ROUTE for Geoname API-> received from client side
app.post("/city", async function (req, res) {
  // console.log("start app,post in server/ index")
  let city = req.body.city;
  let geoAPIUrl = `${baseGeonameURL}=${city}&maxRows=1&username=${userName}`;
  let response = await fetch(geoAPIUrl);
  try {
    const geoAPIData = await response.json();
    //console.log('server side data', geoAPIData)
    res.send(geoAPIData);
    return geoAPIData;
  } 
  catch (error) {
    console.log(error)
  }
});

//Weatherbit API//
const baseWeatherbitURL = "https://api.weatherbit.io/v2.0/forecast/daily?";
const weatherbitKEY = process.env.weather_apikey;
app.post("/weather", async function (req, res) {
  let latitude = req.body.lat;
  let longitude = req.body.lng;
  const weatherAPIUrl = `${baseWeatherbitURL}&lat=${latitude}&lon=${longitude}&key=${weatherbitKEY}`;
  let response = await fetch(weatherAPIUrl);
  try {
    const weatherAPIData = await response.json();
    //console.log('server side data', weatherAPIData)
    res.send(weatherAPIData);

  } catch (error) {
    console.log(error);
  }
});

//pixabay API//
const pixabayURL = "https://pixabay.com/api/?";
const pixabayKEY = process.env.pixbay_apikey;
app.post("/picture", async function (req, res) {
  let city = req.body.city;
  pixabayAPIUrl = `${pixabayURL}key=${pixabayKEY}&q= ${city}&image_type=photo`;
  let response = await fetch(pixabayAPIUrl);
  try {
    const pixabayAPIData = await response.json();
    res.send(pixabayAPIData);
  } catch (error) {
    console.log(error);
  }
});

// designates what port the app will listen to for incoming requests
app.listen(8801, function () {
    console.log("Example app listening on port 8801!");
  });

  module.exports = app