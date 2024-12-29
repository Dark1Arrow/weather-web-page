const apiKey = "c41ddbe3b28b3c2d2420f82b777dda1f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".input input");
const searchBtn = document.querySelector(".input button");
const whtherIcon = document.querySelector(".whether-icon");


async function checkWhether(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity-riding").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h"

        if (data.weather[0].main == "Clear") {
            whtherIcon.src = "image/clear.svg";
        } else if (data.weather[0].main == "Rain") {
            whtherIcon.src = "image/rain.svg";
        } else if (data.weather[0].main == "Drizzle") {
            whtherIcon.src = "image/drizzle.svg";
        } else if (data.weather[0].main == "Mist") {
            whtherIcon.src = "image/mist.svg";
        }else if (data.weather[0].main == "Thunderstorm") {
            whtherIcon.src = "image/thunderstorm.svg";
        }else if (data.weather[0].main == "Haze") {
            whtherIcon.src = "image/haze.svg";
        }else if (data.weather[0].main == "Fog") {
            whtherIcon.src = "image/fog.svg";
        };

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}


searchBtn.addEventListener("click", () => {
    checkWhether(searchBox.value);
})


