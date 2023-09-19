document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "9e97b06b86aa401ca2c174226231909";
    const searchButton = document.getElementById("search");
    const cityInput = document.getElementById("city");
    const cityName = document.querySelector(".city-name");
    const dateTime = document.querySelector(".date-time");
    const temperatureSpan = document.querySelector(".temperature-value");
    const conditionSpan = document.querySelector(".condition-text");
    const humiditySpan = document.querySelector(".humidity-value");
    const windSpeedSpan = document.querySelector(".wind-speed-value");
    const pressureSpan = document.querySelector(".pressure-value");
    const cloudinessSpan = document.querySelector(".cloudiness-value");
    const visibilitySpan = document.querySelector(".visibility-value");
    const weatherInfo = document.querySelector(".weather-info");
    weatherInfo.style.display = "none";
    searchButton.addEventListener("click", function () {
        const city = cityInput.value;
        if (city) {
            fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
                .then(response => response.json())
                .then(data => {
                    const location = data.location.name;
                    const country = data.location.country;
                    const temperature = data.current.temp_c;
                    const condition = data.current.condition.text;
                    const localTime = data.location.localtime;
                    const humidity = data.current.humidity;
                    const windSpeed = data.current.wind_kph;
                    const pressure = data.current.pressure_mb;
                    const cloudiness = data.current.cloud;
                    const visibility = data.current.vis_km;
                    cityName.textContent = `${location}, ${country}`;
                    dateTime.textContent = `Local Time: ${localTime}`;
                    temperatureSpan.textContent = `${temperature}°C`;
                    conditionSpan.textContent = condition;
                    humiditySpan.textContent = `${humidity}%`;
                    windSpeedSpan.textContent = `${windSpeed} km/h`;
                    pressureSpan.textContent = `${pressure} hPa`;
                    cloudinessSpan.textContent = cloudiness;
                    visibilitySpan.textContent = `${visibility} km`;
                    weatherInfo.style.display = "block";
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                    cityName.textContent = "City not found";
                    dateTime.textContent = "";
                    temperatureSpan.textContent = "";
                    conditionSpan.textContent = "";
                    humiditySpan.textContent = "";
                    windSpeedSpan.textContent = "";
                    pressureSpan.textContent = "";
                    cloudinessSpan.textContent = "";
                    visibilitySpan.textContent = "";
                    weatherInfo.style.display = "none";
                });
        }
    });
});
