const apiKey = '7ea7427c3a616ed0191ee30b4cf59a67'
const weatherInfo = document.getElementById('weatherInfo');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    const locationInput = document.getElementById('locationInput').value;
    if (!locationInput) {
        alert('Please enter a location');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
            const description = data.weather[0].description;
            const city = data.name;
            const country = data.sys.country;

            const weatherText = `Weather in ${city}, ${country}: ${description}. Temperature: ${temperature}°C`;

            weatherInfo.textContent = weatherText;
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            weatherInfo.textContent = 'An error occurred. Please try again later.';
        });
});
