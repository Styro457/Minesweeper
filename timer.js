let isTimerActive = false;

const timerBox = document.getElementsByClassName("timer-box")[0];
const timer = document.getElementById("timer");

function startTimer() {
    isTimerActive = true;
    timerBox.classList.remove("animation");
    let time = 0;
    timer.innerHTML = "0:00";
    const x = setInterval(function () {
        if(isTimerActive) {
            time += 1;

            let minutes = Math.floor(time/60);
            let seconds = time%60;
            if(seconds < 10)
                seconds = "0" + seconds;
            timer.innerHTML = minutes + ":" + seconds;
        }
        else {
            clearInterval(x);
        }
    }, 1000);
}

function stopTimer() {
    isTimerActive = false;
}