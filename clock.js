const secondHand = document.getElementById("second-hand");
const minHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");

function setDate() {
    const now = new Date();
    // seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // minutes
    const minutes = now.getMinutes();
    const minDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    // hour
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);