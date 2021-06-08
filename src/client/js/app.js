
 import "regenerator-runtime/runtime";
 
 let destination = {};
 let weather = {};
 let picture = {};
export function handleSubmit(e) {
    e.preventDefault()
    
    let cityInput = document.getElementById('city').value;
	let startDate = document.getElementById('startDate').value;
	let returnDate = document.getElementById('returnDate').value;


    if (city ==""){
        alert("Please enter your destination!");
    } 
    if(startDate ==""){
        alert("Please choose the date you want to depart!");
    }
    if(returnDate ==""){
        alert("Please choose the date you want to return!");
    }
        postGeoData('http://localhost:8801/city',{city: cityInput})
        .then(function(destination){
            //console.log(destination);
            document.getElementById('destination').innerHTML = ` City:${destination.city}, Conutry:${destination.country},
            Conutry Code:${destination.code}. `
      

        postWeatherData("http://localhost:8801/weather", destination)
            .then (function(weather){
            
                document.getElementById('weather').innerHTML =`The weather 
                is <strong>${weather.description}</strong>, average emperature is <strong>${weather.averageTemp}</strong>.
                Hightest:<strong>${weather.lowestTemp}</strong>,
                Lowest:<strong>${weather.highestTemp}</strong>.`
            })

            postPixaData('http://localhost:8801/picture',{  city:destination.city })
            .then(function (){
            
             let img = picture.hits[0].webformatURL;
             document.getElementById('picture').src=`${img}`;
         });
        
        })
        countdownDuration(startDate,returnDate);
    }

    //Calculate duration and countdown //
 function countdownDuration (startDate,returnDate){
    let start = new Date(startDate);
    let end = new Date(returnDate);
    let today = new Date();

    //Calculate duration

    let duration = (end - start)/(1000*3600*24);

    if (duration > 1){
        document.getElementById('duration').innerHTML = `
        Your trip is starting at <strong>${start.toLocaleDateString()}</strong>,
        returning at <strong>${end.toLocaleDateString()}</strong>, <strong>${duration}</strong> days.`
    } else if (duration = 1) {
        document.getElementById('duration').innerHTML = `
        Your trip is starting at <strong>${start.toLocaleDateString()}</strong>,
        returning at <strong>${end.toLocaleDateString()}</strong>, ${duration} day.`

    }
    // Countdown
    let countdown = start - today;
    let countdownInDays = Math.ceil(countdown/(1000*3600*24));

    if (countdownInDays > 1 ){
        document.getElementById('countdown').innerHTML =`
        Days before the trip is <strong>${countdownInDays}</strong> days! `

    }else{
        document.getElementById('countdown').innerHTML =`
        Your trip is starting <strong>tomorrow</strong>!!!`

    }
}

    //POST data 
    

    // POST GeoNames API data 

    const postGeoData = async (url = "", data = {}) =>{
        console.log(data);
        const response = await fetch(url, {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        try {
            const newData = await response.json();
            destination={
                code:newData.geonames[0].countryCode,
                city:newData.geonames[0].name,
                country:newData.geonames[0].countryName,
                lat:newData.geonames[0].lat,
                lng:newData.geonames[0].lng,
                
            }
            return destination;
           } catch (error) {
            console.log(error)
        }
    };

    //POST WeatherBit API data
	const postWeatherData = async (url = "", data = {}) =>{
        
        const response = await fetch(url, {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });//end of response
        try {
            const weatherData = await response.json();
            weather = {
                description : weatherData.data[0].weather.description,
                averageTemp :weatherData.data[0].temp,
                lowestTemp : weatherData.data[0].low_temp,
                highestTemp : weatherData.data[0].max_temp
            }
            console.log(weather);

           return weather;
        } catch (error) {
            console.log(error)
        }
    }
    //  POST Pixabay API data
	const postPixaData = async (url = "", data = {}) =>{
        const response = await fetch(url, {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        try {
            picture = await response.json();
            return picture;
        } catch (error) {
            console.log(error)
        }
    }


