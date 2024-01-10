let referenceTime = Date.now();
let accumulate = 0;
let cronometrar = true;

setInterval(() => {

    let time = document.getElementById('time');

    if (cronometrar) {
        accumulate += Date.now() - referenceTime;
    }

    

    referenceTime = Date.now();

    time.innerHTML = formatearMS(accumulate);

}, 1000 / 60);

const formatearMS = (time_ms) => {
    let MS = time_ms % 1000;
    let S = Math.floor(((time_ms - MS) / 1000) % 60);
    let M = Math.floor((S / 60) % 60);
    let H = Math.floor((M / 60));

    Number.prototype.zeros = function (n) {
        return (this + '').padStart(n, 0)
    }

    if (S == 5){
        alert("hola");
    }
    if (S == 10){
        alert("No desde que me rechasaste persi la cabeza")
    }

    return H.zeros(2) + ':' + M.zeros(2) + ':' + S.zeros(2) + ':' + MS.zeros(3);
}

const startFuntion = () => {
    cronometrar = true;
}

const pauseFuntion = () => {
    cronometrar = false;
}

const resetFuntion = () => {
    accumulate = 0;
}