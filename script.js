var weatherAPIurl= "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}"

// function getWeatherAPI(){
// fetch(weatherAPIurl)
// get: 'daily'
// }
  
//   getWeatherAPI(weatherAPIurl);
//   console.log(weatherAPIurl)



  //set up variables to access DOM
var momentDate = moment().format("MMM Do YY");
$("#city-name").text(momentDate); //Need to add container for HTML for date
var citySearch = $("#city-lists");
var searchBtn = document.getElementById("btn btn-outline");
var currentForecast = document.querySelector("#The-weather");
var weekForecast = document.querySelector(".forecast");
var apiKey ='6fd2a7e7bfa6dd9234d5df15d716d7d3';
var cityName = document.querySelector("#city-name");
var cityList = [];
var weatherInfoEl = document.querySelector(".weather-info");



searchBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log('Hello World');
});


function getCityConditions() {
    var city = "riverside";
    var geoAPI = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + apiKey;
    fetch(geoAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        var {temp} = data.main;
        var place = data.name;
        var {description, icon} = data.weather[0];
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
function getFiveDayForecast() {
    var town = "riverside"
  var forecastWeather = "https://api.openweathermap.org/data/2.5/forecast?q="+ town + "&appid=" + apiKey + "&cnt=5";
  fetch(forecastWeather)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var getArray = data.list;
    for (i = 0; i < getArray.length; i++) {
        console.log(getArray[i]);
        //Finish array to be able to access the array elements***
    }
    var foreCastTemperture = data.list;
        // foreCastTemperture= data.list;
        // console.log(foreCastTemperture);
        weekForecast.textContent = `${foreCastTemperture}`
    

  })
  //  make this function like the daily forecast and see how to add it
}
getFiveDayForecast();