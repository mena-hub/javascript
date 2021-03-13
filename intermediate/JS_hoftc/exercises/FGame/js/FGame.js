function randomGame() {
    let num;
    let times = 0;
    let timer = setInterval(function () {
        num = Math.random();
        times++
        if (num>.75) {
            clearInterval(timer);
            console.log("Número mayor que .75 en " + times + " intento/s");
        }
    }, 1000);
}
// randomGame();