// INIT STORAGE OBJECT
const storage = new Storage();
const weatherLocation = storage.getLocationData();

// INIT WEATHER OBJECT
const weather = new Weather(weatherLocation.city);
// INIT UI OBJECT
const ui = new UI();

// Change location event
document.getElementById("w-change-btn").addEventListener("click", function(e) {
  const city = document.getElementById("city").value;

  // update the city
  weather.changeLocation(city);

  //set location from local storage
  storage.setLocationData(city);

  // get updated weather
  getWeather();

  //close modal
  $("#locModal").modal("hide");
});
// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(res => ui.paint(res))
    .catch(data => console.log(data));
}
