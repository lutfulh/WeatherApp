class Weather {
  constructor(city) {
    (this.apiKey = "2dc0c5066571e2a9f6c00e262dfcacd1"), (this.city = city);
  }

  async getWeather() {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${
        this.apiKey
      }&units=metric`
    );
    let responseData = await response.json();

    return responseData;
    console.log(responseData);
  }

  changeLocation(city) {
    this.city = city;
  }
}
