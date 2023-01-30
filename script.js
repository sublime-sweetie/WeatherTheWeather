var apiKey ='4dbb1892e99b660093b544d4ea03c59a';
var weatherAPIurl= "https://api.openweathermap.org/data/2.5/onecall?lat=34.0522&lon=118.2437&exclude=minutely,alerts&appid=4dbb1892e99b660093b544d4ea03c59a"

// function getWeatherAPI(){
// fetch(weatherAPIurl)
// get: 'daily'

// }
//   getWeatherAPI(weatherAPIurl);
// var moment= require("moment");
// var momentDate = moment().format("MMM Do YY");

var citySearch = $("#city-lists");
var searchBtn = document.getElementById("searchButton");
var currentForecast = document.querySelector("#The-weather");
var weekForecast = document.querySelector(".forecast");

var cityName = document.querySelector("#city-name");
var cityList = [];
var weatherInfoEl = document.querySelector(".weather-info");

// $("#city-name").text(momentDate); 

// searchBtn.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log('Hello World');
// });


function getCityConditions() {
    var city = "Los Angeles";
    var geoAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=34.0522&lon=118.2437&exclude=minutely,alerts&appid=4dbb1892e99b660093b544d4ea03c59a";
    fetch(geoAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        var {temp} = data.main;
        var place = data.name;
        // var {description, icon} = data.weather[0];
        var {sunrise, sunset} =  data.sys;
        var fahrenheit = (temp * 0.9)  / 5 + 32;
        var sunrise = new Date(sunrise * 1000);
        var sunset = new Date(sunset * 1000);
        cityName.textContent = `${place}`;
        weatherInfoEl.textContent = `${fahrenheit.toFixed(2)} °F`
        // Need to fix the card body for current forecast
    })
  
}
getCityConditions();

//-----------------------------5 Day forecast--------------------------------------------------------------------------------------------------------------------------------------------------------
// function getFiveDayForecast() {
//     var town = "Los Angeles"
//   var forecastWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=34.0522&lon=118.2437&exclude=minutely,alerts&appid=4dbb1892e99b660093b544d4ea03c59a";
//   fetch(forecastWeather)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     var getArray = data.list;
//     for (i = 0; i < getArray.length; i++) {
//         console.log(getArray[i]);
//         //Finish array to be able to access the array elements***
//     }
//     var foreCastTemperture = data.list;
//         // foreCastTemperture= data.list;
//         // console.log(foreCastTemperture);
//         weekForecast.textContent = `${foreCastTemperture}`
    

//   })
//   //  make this function like the daily forecast and see how to add it
// }
// getFiveDayForecast();