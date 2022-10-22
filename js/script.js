// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input (per i chilometri e per l'età) e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console o su un semplice div in pagina.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


// let kilometres = parseInt(prompt('I chilometri che vuoi percorrere sono?'));
// let age = parseInt(prompt('quanti anni hai?'));
// if(age <= 17){
//     let priceTotal = Math.round((0.21 * kilometres) * 0.20 * 100) / 100;
//     console.log('Il prezzo totale è:' , priceTotal + '€');
// } else if(age >= 65) {
//     let priceTotal = Math.round((0.21 * kilometres) * 0.40 * 100) / 100;
//     console.log('Il prezzo totale è:' , priceTotal + '€');
// }
// else {
//     let priceTotal = Math.round(kilometres * 0.21 * 100) / 100;
//     console.log('Il prezzo totale è:' , priceTotal + '€');
// }

function calc(){
 
    let kilometres = document.querySelector('.chilometri').value;
    let age = document.querySelector('.anni').value;
    let priceTotal = document.querySelector('.result').value;
    let section2 = document.querySelector('.ticket');
    let generator = document.querySelector('.genera');

    generator.addEventListener('click', function () {
        section2.classList.add('open');
    });

    section2.classList.add('open');

    if(age === 'Minorenne'){
        document.querySelector('.result').value = Math.round((0.21 * kilometres) * 0.20 * 100) / 100;
        console.log('Il prezzo totale è:' , document.querySelector('.result').value + '€');
    }

    else if(age ==='Over65'){
        document.querySelector('.result').value = Math.round((0.21 * kilometres) * 0.40 * 100) / 100;
        console.log('Il prezzo totale è:' , document.querySelector('.result').value + '€');
    }

    else {
        document.querySelector('.result').value = Math.round((0.21 * kilometres) * 100) / 100;
        console.log('Il prezzo totale è:' , document.querySelector('.result').value + '€');
    }



}
