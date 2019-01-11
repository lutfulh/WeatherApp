class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.maxTemp = document.getElementById("w-maxtemp");
    this.pressure = document.getElementById("w-pressure");
    this.wind = document.getElementById("w-wind");
    this.bg = document.getElementById("bg");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp + "°C";
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.maxTemp.textContent = `Maximum Temperature: ${
      weather.main.temp_max
    } °C`;
    this.pressure.textContent = `Pressure Level: ${weather.main.pressure}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;

    if (weather.main.temp > 90) {
      this.bg.classList.add("bg-danger");
    } else if (weather.main.temp > 60) {
      this.bg.classList.add("bg-warning");
    } else if (weather.main.temp > 45) {
      this.bg.classList.add("bg-info");
    } else if (weather.main.temp > 30) {
      this.bg.classList.add("bg-success");
    } else {
      this.bg.classList.add("bg-primary");
    }
  }
}
