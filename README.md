Travel App

Description:
In this app you can enter travel information. The app expects a city name,departure date, and return date. Using given information, it will get position ( longitude and latitude ) data from Geonames API by sending city name. Then it will send position data to weatherbit and depending how far departure date is, it will get the forecast data for the weather in that area. Also, it will go to Pixabay and get an image related to that place.

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