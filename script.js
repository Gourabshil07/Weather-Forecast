document.getElementById('get-weather').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    const apiKey = '16eebc898576f57379b774f365a283a1'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'16eebc898576f57379b774f365a283a1'}&units=metric`;

    const searchBox = document.getElementById(".search input");
    const searchBtn = document.getElementById(".search button");
    
    
    const weatherIcon = document.querySelector('.weather-icon');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            document.getElementById('city').innerText = data.name;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity} %`;
            document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
            document.getElementById('weather-description').innerText = `Description: ${data.weather[0].description}`;

            
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "clear.png"
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "rain.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "drizzle.png"
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "mist.png"
            }
            else if(data.weather[0].main == "Thunderstorm"){
                weatherIcon.src = "storm.png"
            } 
            
        })
        
           
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })

        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});


function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time').textContent = ` Time: ${timeString}`;
}

// Update the time every second
setInterval(updateTime, 1000);


updateTime();
