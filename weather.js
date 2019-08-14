class Weather {
    constructor(city, country) {
        this.apiKey = 'a4b684470c19f3dd9e6d6a1be758bec9';
        this.city = city;
        this.country = country;
    }

    //Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    //Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}