window.onload = () => {

    function setDate() {
        //      ----- Time -----
        const dateNow = new Date();
        const secs = dateNow.getSeconds();
        const mins = dateNow.getMinutes();
        const hours = dateNow.getHours();
        // ----- Time into Degrees -----
        const secDegrees = ((secs / 60) * 360) + 90;
        const minDegrees = ((mins / 60) * 360) + 90;
        const hourDegrees = ((hours / 12) * 360) + 90;

        const secHand = document.getElementById('hand__sec');
        const minHand = document.getElementById('hand__min');
        const hourHand = document.getElementById('hand__hour');
        secHand.style.transform = `rotate(${secDegrees}deg)`
        minHand.style.transform = `rotate(${minDegrees}deg)`
        hourHand.style.transform = `rotate(${hourDegrees}deg)`
    }


    setInterval(setDate, 1000)
}