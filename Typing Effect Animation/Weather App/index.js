const apiKey = "35ab4f40f3f5e97f37ea5618fb36012b";

const weatherDataEl = document.getElementById("weather-data")

const cityInputEl = document.getElementById("city-input")

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event)=>{
        event.preventDefault();
        const cityValue = cityInputEl.value;
        console.log(cityValue)
        getWeatherData(cityValue);
})

async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        
        if(!response.ok){
            throw new Error("Network error was not ok.")
        }

        const data = await response.json()

        console.log(data)
        const temperature = Math.round(data.main.temp)
        console.log(temperature)
        const description = data.weather[0].description
        console.log(description)
        const icon = data.weather[0].icon
        console.log(icon)
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`,
        ]

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`

        weatherDataEl.querySelector(".description").textContent = description;

        weatherDataEl.querySelector(".details").innerHTML = details.map(
            (detail)=>`<div>${detail}</div>`
        ).join("");

    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML = "";

        weatherDataEl.querySelector(".temperature").innerText = "";

        weatherDataEl.querySelector(".description").textContent = "An error happened! Please try again";

        weatherDataEl.querySelector(".details").innerHTML = "";

    }
}