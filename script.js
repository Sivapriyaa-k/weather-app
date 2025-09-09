document.addEventListener("DOMContentLoaded", function () {

    var button = document.getElementById("get-weather-btn");
    var weatherInfo = document.getElementById("weather-info");
    var cityName = document.getElementById("city-name");
    var temperature = document.getElementById("temperature");
    var description = document.getElementById("description");
    var errorMessage = document.getElementById("error-message");
    var API_KEY = "833a133d5ef7d082b827131557c4de14";
    button.addEventListener("click", async () => {
        var city = document.getElementById("city-input").value.trim();

        if (city === "") return "";

        try {
            var weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            console.log(error)
            showErrorData();
        }
    })

    async function fetchWeatherData(city) {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        var response = await fetch(url);
        console.log(typeof response)
        if (!response.ok) {
            console.log(response.ok)
            throw new Error("City Not Found");
        }

        var data = response.json();
        return data;
    }

    function displayWeatherData(weatherData) {
        console.log(weatherData);
        const { name, main, weather } = weatherData;
        cityName.textContent = name;
        temperature.textContent = `Temperature : ${main.temp}`
        description.textContent = `Weather : ${weather[0].description}`
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add('hidden');

    }

    function showErrorData() {
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add('hidden');
    }
})