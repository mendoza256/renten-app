console.log('console works');

//eintritt in rente
const rente = new Date("Jul 02, 2022").getTime();

const x = setInterval(function() {
    // heute
    let now = new Date().getTime();

    // differenz zw heute und rente
    let difference = rente - now;

    // rechnung für wochen und tage
    let weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24))

    //anzeige im div countdown
    document.getElementById("countdown").innerHTML = `Hallo Papa, nur noch <br><br>${weeks} Wochen <br>${days} Tage <br><br>bis zu deiner Rente! &#x1F973`;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "Alles Liebe zum Eintritt in die wohlverdiente Rente! :)"
    }
}, 1000);