
const API_KEY = 'e3d30d93064e90ac7ae6f837b4cf21b0'; // Replace with your own API key
const weatherContainer = document.querySelector('.weather-container');
const tempElem = document.querySelector('.weather-temp');
const descElem = document.querySelector('.weather-desc');
const citySelect = document.querySelector('.listcity');
const humidityElem = document.querySelector('.humidity-view');
const windElem = document.querySelector('.wind-view');
const pressureElem = document.querySelector('.PRESSURE-value');
const weekList = document.querySelector('.week-list');
const dayNameElem = document.querySelector('.date-dayname');
const dateElem = document.querySelector('.date-day');
const locationElem = document.querySelector('.location');


// Add event listener for city select change
citySelect.addEventListener('change', () => {
    const city = citySelect.value;
    getWeather(city);
});

// Fetch weather data from API and update HTML
function getWeather(city) {
    const currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

    Promise.all([fetch(currentWeatherApiUrl), fetch(forecastApiUrl)])
        .then(([currentWeatherResponse, forecastResponse]) => {
            return Promise.all([currentWeatherResponse.json(), forecastResponse.json()]);
        })
        .then(([currentWeatherData, forecastData]) => {
            const temp = Math.round(currentWeatherData.main.temp);
            const desc = currentWeatherData.weather[0].description;
            const icon = currentWeatherData.weather[0].icon;


            const humidity = currentWeatherData.main.humidity;
            const windSpeed = currentWeatherData.wind.speed;
            const pressure = currentWeatherData.main.pressure;

            tempElem.textContent = `${temp}°C`;
            descElem.textContent = desc;
            humidityElem.textContent = `${humidity}%`;
            windElem.textContent = `${windSpeed} km/h`;
            pressureElem.textContent = `${pressure} %`;
            weatherContainer.style.backgroundImage = `url(${iconUrl})`;

            // Update weekly forecast
            const forecastItems = forecastData.list.slice(1, 6);
            weekList.innerHTML = '';
            forecastItems.forEach((item, index) => {
                const dayName = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
                const dayTemp = Math.round(item.main.temp);
                const dayIcon = item.weather[0].icon;
                // const dayIconUrl = `http://openweathermap.org/img/w/${dayIcon}.png`;


                const dayListItem = document.createElement('li');
                dayListItem.classList.add(index === 0 ? 'active' : '');
                dayListItem.innerHTML = `<i class="day-icon" data-feather="sun"><img src="${dayIconUrl}" alt="Weather icon"></i>
                                  <span class="day-name">${dayName}</span>
                                  <span class="day-temp">${dayTemp}°C</span>`;
                weekList.appendChild(dayListItem);
            });
        })


        .catch(error => console.error(error));
    citySelect.addEventListener('change', () => {
        const city = citySelect.value;
        getWeather(city);
        dayNameElem.textContent = 'Loading...';
        dateElem.textContent = '';
        locationElem.textContent = '';
    });

}

// Get initial weather data for selected city
const selectedCity = citySelect.value;
getWeather(selectedCity);
