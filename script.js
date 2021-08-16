console.log('console works');

//datum - eintritt in rente
const rente = new Date("Jul 02, 2022").getTime();

// emojis
const funEmojis = ["1F60D", "1F929", "1F917", "1F973", "1F920", "1F60E", "1F4AB", "1F918", "1F64C", "1F3CC", "1F99C", "1F490", "1F375", "1F37E", "1F942", "1F3DD", "1F3D6", "1F31F", "1F389", "1F388", "1F3C6", "1F947", "26F3"];

// emoji-picker
let randomEmoji = funEmojis[Math.floor(Math.random()*funEmojis.length)]

// berechnung + aktualisierung
const x = setInterval(function() {
    // heute
    let now = new Date().getTime();

    // differenz zw heute und rente
    let difference = rente - now;

    // rechnung für wochen und tage
    let weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24))

    //anzeige im div countdown
    document.getElementById("countdown").innerHTML = `Hallo Papa, nur noch <br><br>${weeks} Wochen <br>${days} Tage <br><br>bis zu deiner Rente! &#x${randomEmoji}`;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "Alles Liebe zum Eintritt in die wohlverdiente Rente! :)"
    }
}, 1000);



