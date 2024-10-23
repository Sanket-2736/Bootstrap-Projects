let dayItem = document.querySelector("#days")
let hoursItem = document.querySelector("#hours")
let minItem = document.querySelector("#min")
let secItem = document.querySelector("#sec")

let countdown = () => {
    let futureDate = new Date("30 July 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) %24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;


    dayItem.innerHTML = days;
    minItem.innerHTML = min;
    hoursItem.innerHTML = hours;
    secItem.innerHTML = sec;
}

countdown();
setInterval(countdown, 1000);

function scrollTopBack() {
    let scrollTopButton = document.querySelector('#scrollup');
    window.onscroll = function() {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 250) {
            scrollTopButton.classList.add('scrollActive');
        } else {
            scrollTopButton.classList.remove('scrollActive');
        }
    }
}

scrollTopBack();
