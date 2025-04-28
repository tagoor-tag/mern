const apiKey = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}";
const weatherInfoDiv = document.getElementById("weather-info");
const forecastInfoDiv = document.getElementById("forecast-info");
const loadingMessage = document.getElementById("loading-message");  // Optional: A div to show a loading message

document.getElementById("get-weather").addEventListener("click", function() {
  const city = document.getElementById("city-input").value.trim();  // Trim to remove leading/trailing spaces
  
  if (city === "") {
    weatherInfoDiv.innerHTML = "<p>Please enter a city name.</p>"; // Handle empty input
    return;
  }
  
  // Show the loading message while fetching data
  loadingMessage.innerHTML = "<p>Loading...</p>";

  // Fetch weather data from the API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        weatherInfoDiv.innerHTML = "<p>City not found. Please try again.</p>";  // Handle city not found
      } else {
        const { main, weather, wind, sys } = data;
        
        // Build the weather details HTML
        const weatherDetails = `
          <h2>Current Weather in ${city}</h2>
          <p><img src="http://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}"> ${weather[0].description}</p>
          <p>Temperature: ${main.temp}°C</p>
          <p>Humidity: ${main.humidity}%</p>
          <p>Wind Speed: ${wind.speed} m/s</p>
          <p>Sunrise: ${new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: ${new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
        `;
        
        // Display the weather details
        weatherInfoDiv.innerHTML = weatherDetails;
      }
    })
    .catch(error => {
      weatherInfoDiv.innerHTML = "<p>An error occurred. Please try again later.</p>";
    })
    .finally(() => {
      loadingMessage.innerHTML = ""; // Hide the loading message after the request is complete
    });
});
