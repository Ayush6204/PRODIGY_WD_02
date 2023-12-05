let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap'); // Assuming you have a lap button
let lapList = document.getElementById('lapList'); // Assuming you have an unordered list for displaying laps

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer;
let lapCounter = 1; // To keep track of lap numbers

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    lapCounter = 1;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    lapList.innerHTML = ""; // Clear lap list on reset
});

lapBtn.addEventListener('click', function () {
    if (timer) {
        // Create a new list item for each lap
        let lapTimeItem = document.createElement('li');
        lapTimeItem.textContent = `Lap ${lapCounter++}: ${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}.${formatCount(count)}`;
        lapList.appendChild(lapTimeItem);
    }
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        document.getElementById('hr').innerHTML = formatTime(hour);
        document.getElementById('min').innerHTML = formatTime(minute);
        document.getElementById('sec').innerHTML = formatTime(second);
        document.getElementById('count').innerHTML = formatCount(count);

        setTimeout(stopWatch, 10);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatCount(count) {
    return count < 10 ? `0${count}` : count;
}