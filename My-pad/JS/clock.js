const clock = document.querySelector("h4#clock");

function getClock() {
    const date = new Date();
    const years = date.getFullYear();
    const months = String(date.getMonth() + 1).padStart(2, "0");
    const dates = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${years}.${months}.${dates}
    ${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000);
getClock();
setInterval(getClock, 1000);