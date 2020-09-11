window.onload = () => {

    function setDate() {

        const dateNow = new Date();
        const secs = dateNow.getSeconds();
        const secDegrees = ((secs / 60) * 360) + 90;
        console.log(secs);


        const secHand = document.getElementById('hand__sec')
        secHand.style.transform = `rotate(${secDegrees}deg)`
    }

    setInterval(setDate, 1000)
}