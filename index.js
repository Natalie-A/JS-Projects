window.onload = function() {

    var num = 0;
    var appendNum = document.getElementById('number')
    var buttonStart = document.getElementById('start');
    var buttonStop = document.getElementById('stop');
    var buttonReset = document.getElementById('reset');
    var Interval;

    buttonStart.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 100);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }


    buttonReset.onclick = function() {
        clearInterval(Interval);
        num = "0";
        appendNum.innerHTML = num;
    }



    function startTimer() {
        num++;

        if (num <= 9) {
            appendNum.innerHTML = "0" + num;
        }

        if (num > 9) {
            appendNum.innerHTML = num;

        }

    }


}