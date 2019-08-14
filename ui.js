class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
        this.lowtemp = document.getElementById('w-low-temp');
        this.hightemp = document.getElementById('w-high-temp');
    }


    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.temp.textContent = this.round((weather.main.temp - 273.15) * 9 / 5 + 32 * 10 / 10, 2) + ' F (' + this.round((weather.main.temp - 273.15), 2) + ' C)';
        this.icon.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png');
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.wind.textContent = `Wind: From the ` + this.windDirection(weather.wind.deg) + ` at ${weather.wind.speed} MPH`;
        this.lowtemp.textContent = `Low Temp: ${this.round((weather.main.temp_min - 273.15) * 9 / 5 + 32 * 10 / 10, 2) } F (` + this.round((weather.main.temp_min - 273.15), 2) + ` C)`;
        this.hightemp.textContent = `High Temp: ${this.round((weather.main.temp_max - 273.15) * 9 / 5 + 32 * 10 / 10, 2) } F (` + this.round((weather.main.temp_max - 273.15), 2) + ` C)`;

    }


    round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    windDirection(number) {
        let direction = {
            10: "N",
            20: "N/NE",
            30: "N/NE",
            40: "NE",
            50: "NE",
            60: "E/NE",
            70: "E/NE",
            80: "E",
            90: "E",
            100: "E",
            110: "E/SE",
            120: "E/SE",
            130: "SE",
            140: "SE",
            150: "S/SE",
            160: "S/SE",
            170: "S",
            180: "S",
            190: "S",
            200: "S/SW",
            210: "S/SW",
            220: "SW",
            230: "SW",
            240: "W/SW",
            250: "W/SW",
            260: "W",
            270: "W",
            280: "W",
            290: "W/NW",
            300: "W/NW",
            310: "NW",
            320: "NW",
            330: "N/NW",
            340: "N/NW",
            350: "N",
            360: "N"
        };
        return direction[number];
    }
}