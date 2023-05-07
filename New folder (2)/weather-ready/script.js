const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "e3d30d93064e90ac7ae6f837b4cf21b0";
const locationSelect = document.querySelector(".location-button");
locationSelect.addEventListener("change", () => {
    const city = locationSelect.value;
    getWeatherData(city);
});

window.addEventListener("load", () => {
    getWeatherData("Paris"); // default city
});

function getWeatherData(city) {
    axios
        .get(apiUrl, {
            params: {
                q: city,
                appid: apiKey,
                units: "metric", // to get Celsius temperature
            },
        })
        .then((response) => {
            const weatherData = response.data;
            updateWeatherTemplate(weatherData);
        })
        .catch((error) => {
            console.error(error);
        });
}
function updateWeatherTemplate(weatherData) {
    const date = new Date();
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    const dayOfMonth = date.toLocaleDateString("en-US", { day: "numeric" });
    const month = date.toLocaleDateString("en-US", { month: "short" });

    const city = weatherData.name;
    const country = weatherData.sys.country;
    const temperature = Math.round(weatherData.main.temp);
    const description = weatherData.weather[0].description;
    const pressure = weatherData.main.pressure;
    const humidity = weatherData.main.humidity;
    const windSpeed = weatherData.wind.speed;
    const iconCode = weatherData.weather.icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    document.querySelector(".date-dayname").textContent = dayOfWeek;
    document.querySelector(".date-day").textContent = `${dayOfMonth} ${month} ${date.getFullYear()}`;
    document.querySelector(".location").textContent = `${city}, ${country}`;
    document.querySelector(".weather-temp").textContent = `${temperature}`;
    document.querySelector(".weather-desc").textContent = `${description}`;

    const pressureElement = document.querySelector('.PRESSURE');
    const humidityElement = document.querySelector('.humidity-view');
    const windElement = document.querySelector('.wind-view');
    pressureElement.textContent = pressure;
    humidityElement.textContent = humidity + "%";
    windElement.textContent = windSpeed + "km/h";



    // Fetch the weekly forecast data from the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Extract the daily forecast data from the API response
            const dailyForecasts = data.list.filter(forecast => {
                const date = new Date(forecast.dt_txt);
                const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
                return forecast.dt_txt.includes("12:00:00") && dayOfWeek !== "Sat";
            });

            // Update the HTML with the daily forecast data
            const weekList = document.querySelector(".week-list");
            weekList.innerHTML = "";
            dailyForecasts.forEach(forecast => {
                const date = new Date(forecast.dt_txt);
                const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
                const dayTemp = Math.round(forecast.main.temp - 273.15) + "Â°C";
                const dayIcon = forecast.weather[0].icon;
                const dayDesc = forecast.weather[0].description;

                const dayItem = `
        <li>
          <i class="day-icon" data-feather="${dayIcon}"></i>
          <span class="day-name">${dayName}</span>
          <span class="day-temp">${dayTemp}</span>
        </li>
      `;
                weekList.insertAdjacentHTML("beforeend", dayItem);
            });
        })



}