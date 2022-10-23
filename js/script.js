function calc(){
 
    let kilometres = document.querySelector('.chilometri').value;
    let age = document.querySelector('.anni').value;
    let priceTotal = document.querySelector('.result').value;
    let eleOpen = document.querySelector('.ticket');
    let generator = document.querySelector('.genera');
    let eleClose = document.querySelector('.chiudi');


    generator.addEventListener('click', function () {
        eleOpen.classList.add('open');
        generator.classList.add('btnborder');
    });

   eleClose.addEventListener('click', function () {
        eleOpen.classList.remove('open');
        generator.classList.remove('btnborder');
    });

    

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
