let centi_second = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

startFunction = () => {
    control = setInterval(chronometer, 10);
    document.getElementById("btn-start").disabled = true;
};

pauseFunction = () => {
    clearInterval(control);
    document.getElementById("btn-start").disabled = false;

};

resetFunction = () => {
    clearInterval(control);
    document.getElementById("btn-start").disabled = false;
    centi_second = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("segunds").innerHTML = "00";
    document.getElementById("centi_second").innerHTML = "00";
};

chronometer = () => {
    if (centi_second < 99) {
        centi_second++;
        if (centi_second < 10) {
            centi_second = '0' + centi_second;
        }
        document.getElementById('centi_second').innerHTML = centi_second;
    }

    if (centi_second == 99) {
        centi_second = -1;
    }

    if (centi_second == 0) {
        seconds++;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        document.getElementById('segunds').innerHTML =  seconds;
    }

    if (seconds == 59) {
        seconds = -1;
    }

    
    if ((centi_second == 0) && (seconds == 0)) {
        
        minutes++;
        if (minutes < 10) { minutes = "0" + minutes }
    
        document.getElementById('minutes').innerHTML =  minutes;
    }
    if (minutes == 59) {
        minutes = -1;
    }
    if ((centi_second == 0) && (seconds == 0) && (minutes == 0)) {
        hours++;
        if (hours < 10) { hours = "0" + hours }
        document.getElementById('hours').innerHTML = hours;
    }
}