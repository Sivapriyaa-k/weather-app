document.addEventListener("DOMContentLoaded", function () {

    var button = document.getElementById("get-whether-btn");
    var weatherInfo = document.getElementById("whether-info");
    var cityName = document.getElementById("city-name");
    var temperature = document.getElementById("temperature");
    var description = document.getElementById("description");
    var errorMessage = document.getElementById("error-message");
    var API_KEY = "833a133d5ef7d082b827131557c4de14";
    button.addEventListener("click", async () => {
        var city = document.getElementById("city-input").value.trim();

        if (city === "") return "";

        try {
            var whetherData = await fetchWhetherData(city);
            displayWhetherData(whetherData);
        } catch (error) {
            showErrorData();
        }
    })

    async function fetchWhetherData(city) {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        var response = fetch(url);
        console.log(typeof response)
        console.log(response)


    }

    function displayWhetherData(weatherData) {

    }

    function showErrorData() {
        console.log("hidde")
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove('hidden');
    }
})