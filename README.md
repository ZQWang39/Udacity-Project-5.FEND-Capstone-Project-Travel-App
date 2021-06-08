Project Travel App

5th Project Cap Stone for UDACITY NanoDegree

Overview

In this app you can enter travel information. The app expects a city name,departure date, and return date. Using given information, it will get position ( longitude and latitude ) data from Geonames API by sending city name. Then it will send position data to weatherbit and depending how far departure date is, it will get the forecast data for the weather in that area. Also, it will go to Pixabay and get an image related to that place.

Functionality

Server: server is index.js that do all the working job for sending a request to the app and the return data to the client js. the server work with 3 API interacting with each other, GEOname API, Weatherbit API & PIXabay API , GEOname after input the city name this API take a name and look for this city and return lat and lng. then the PIXabay and Weatherbit will work with the data from GEOname and start request to get data and then sent to the client.

Client: the client has a main function. in app.js which do start the post data request to the server after the user inputs data files.

Test:
test adjustDate.js
test app.js

Technologies used
HTML
CSS
SASS
JavaScript
Node.js
Express.js
Webpack
Pixabay API
GeoNames API
Weatherbit API
Jest Framework
Google Workbox

Instructions
npm install
npm run build-prod
npm run start

For test:
npm test


References:
APIs from "weatherbit.io", "geonames.org" and "pixabay.com" were used in this project.

The feature I chose to extend my project to stand out is adding the tri return date and display length of trip.