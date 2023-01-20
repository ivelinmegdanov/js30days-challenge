const countdown = document.querySelector('.display__time-left');
const end = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

let seconds = 0;
let minutes = 0;

function startTimer() {
    const totalSeconds = this.dataset.time;

    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;

    var currentTime = new Date();
    var endHours = currentTime.getHours();
    var endMinutes = currentTime.getMinutes();
    var endSeconds = currentTime.getSeconds();
    end.innerHTML = `Timer ends ${endHours} : ${endMinutes + minutes} : ${endSeconds + seconds}`;
    update();
}

function update() {
    countdown.innerHTML = `${("0" + minutes).slice(-2)} : ${("0" + seconds).slice(-2)}`;
}

let x = setInterval(function() {
    if(minutes === 0 && seconds === 0){
        countdown.innerHTML = `Times up`;
        return;
    }

    seconds--;
    
    if(seconds < 0){
        seconds = 59;
        minutes--;
    }
    if(minutes < 0){
        clearInterval(x);
    }

    countdown.innerHTML = `${("0" + minutes).slice(-2)} : ${("0" + seconds).slice(-2)}`;
}, 1000);

buttons.forEach(button => button.addEventListener('click', startTimer));