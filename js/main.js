'use strict';


let mainDate = new Date('2025 1 1');
console.log(mainDate);
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let day = document.getElementById('day');
let sec = document.getElementById('sec');


function update() {

    let timeNow = new Date();

    day.innerHTML = Math.floor((mainDate - timeNow) / 1000 / 60 / 60 / 24);
    hour.innerHTML = Math.floor(((mainDate - timeNow) / 1000 / 60 / 60 % 24));
    min.innerHTML = Math.floor(((mainDate - timeNow) / 1000 / 60 % (60 * 24) % 60));
    sec.innerHTML = Math.floor(((mainDate - timeNow) / 1000 % (24 * 60 * 60) % 60 % 60));

}

setInterval(update, 1000)