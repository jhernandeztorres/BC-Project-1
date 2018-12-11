$(document).ready(function () {
    let cityArr = [];

    $(".submit").on("click", function (e) {
        e.preventDefault()
        cityArr = [];
        iatacodes = [];
        console.log(iatacodes)
        let begin = $("#location-input").val().trim();
        let end = $("#destination-input").val().trim();
        if (begin !== "" && end !== "") {
            cityArr.push({ city: begin }, { city: end });
            weatherData();
            aroundIATA(begin, end)
            // fakeFunction()
        } else {
            alert("Fill out all fields");
        }

    })

    function weatherData() {
        const apiKey = "ce836c9b60ad9971ea91f7fa53b647fc";
        for (let i = 0; i < cityArr.length; i++) {
            let city = cityArr[i].city;
            const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + apiKey;
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                var results = response;
                let lat = results.coord.lat;
                let lon = results.coord.lon;
                let temperature = results.main.temp;
                let maxTemp = results.main.temp_max;
                let minTemp = results.main.temp_min;
                let country = results.sys.country;
                let weatherMain = results.weather[0].main;
                let description = results.weather[0].description;
                let id = "icon" + cityArr.indexOf(cityArr[i]);
                cityArr[i].lat = lat;
                cityArr[i].lon = lon;
                cityArr[i].maxTemp = maxTemp;
                cityArr[i].minTemp = minTemp;
                cityArr[i].country = country;
                cityArr[i].weatherMain = weatherMain;
                cityArr[i].description = description;
                cityArr[i].id = id;

                // Show selected cities name in <div>
                $("#city-name1").text(cityArr[0].city).addClass("text-capitalize");
                $("#city-name2").text(cityArr[1].city).addClass("text-capitalize");

                // Grab temperature from object and show temp in farenheit in <div>
                const degree = temperature;
                cityArr[i].temperature = Math.round(degree);
                $("#city1Day1Temp").text("Current Temperature: " + cityArr[0].temperature + "\xB0F");
                $("#city2Day1Temp").text("Current Temperature: " + cityArr[1].temperature + "\xB0F");

                // Grab lat and lon for Skycons
                getData(lat, lon, id);

                // Passing lat lon of second city for video API
                if (i === 0) {
                    OriginWebCamPull(lat, lon);
                }

                if (i === 1) {
                    DestinationWebCamPull(lat, lon);
                }
            })
        }
    }

    function getData(lat, lon, id) {
        const apiKey = "c38f38fafa15b4cc5eb95f4dab2c7dc1";
        const corsURL = "https://cors-anywhere.herokuapp.com/"; // 
        let weatherURL = corsURL + "https://api.darksky.net/forecast/" + apiKey + "/" + lat + "," + lon;

        $.getJSON(weatherURL, function (data) {
            let icon = data.currently.icon;
            let skycons = new Skycons({
                "color": "blue"
            });

            function weatherIcon() {
                if (icon === "clear-day") {
                    skycons.add(id, Skycons.CLEAR_DAY);
                } else if (icon === "clear-night") {
                    skycons.add(id, Skycons.CLEAR_NIGHT);
                } else if (icon === "rain") {
                    skycons.add(id, Skycons.RAIN);
                } else if (icon === "snow") {
                    skycons.add(id, Skycons.SNOW);
                } else if (icon === "sleet") {
                    skycons.add(id, Skycons.SLEET);
                } else if (icon === "wind") {
                    skycons.add(id, Skycons.WIND);
                } else if (icon === "fog") {
                    skycons.add(id, Skycons.FOG);
                } else if (icon === "cloudy") {
                    skycons.add(id, Skycons.CLOUDY);
                } else if (icon === "clear-night") {
                    skycons.add(id, Skycons.CLEAR_NIGHT);
                } else if (icon === "partly-cloudy-day") {
                    skycons.add(id, Skycons.PARTLY_CLOUDY_DAY);
                } else if (icon === "partly-cloudy-night") {
                    skycons.add(id, Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                    console.log("Dark Sky icon did not return a matching case");
                }
                skycons.play();
            }
            weatherIcon();
        })
    }

});
