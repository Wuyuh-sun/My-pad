const API_KEY = "3df264233ad8bf3b723b4ced862e3428";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:first-child");
            city.innerText = data.name;

            const weatherContainer = document.querySelector("#weather span:nth-child(2)");
            weatherContainer.innerText = `
        ${data
                .main
                .temp}°C ${data
                .weather[0]
                .main}`;

            const weatherImg = document.querySelector(".weatherIcon");
            weatherImg.src = `https://openweathermap.org/img/wn/${data
                .weather[0]
                .icon}.png`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator
    .geolocation
    .getCurrentPosition(onGeoOk, onGeoError);