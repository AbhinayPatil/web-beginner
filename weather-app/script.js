let baseUrl = "http://api.weatherapi.com/v1/current.json?";
const apiKey = "";

let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind_speed = document.querySelector(".wind-speed");
let weather_icon = document.querySelector(".weather-icon");
let searchBtn = document.querySelector(".search-btn");



// what am i extracting from the api
// temp city humidity wind-speed weather-icon
//api used weatherAPI



let getWeather = async ()=>{
    let cityInput = document.querySelector(".search-city").value;
    if(cityInput == null || cityInput == ""){
        cityInput = "Mumbai"; //default value 
    }
    let url = baseUrl+`key=${apiKey}&q=${cityInput}&aqi=no`;
    const responce = await fetch(url);
    if(!responce.ok){
        console.log("oops something went wrong");
        return;
    }
    let  data = await responce.json();
    weather_icon.src = data["current"]["condition"]["icon"];
    city.textContent = data["location"]["name"];
    temp.textContent = `${data['current']['temp_c']}°C`;
    wind_speed.textContent =`${data['current']['wind_kph']} kmph`;
    humidity.textContent=`${data['current']['humidity']} %`;
}
getWeather();
searchBtn.addEventListener("click",getWeather);
