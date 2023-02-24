'use strict';


const dadoGiocatore = Math.floor(Math.random() * 6) + 1;
const dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log('numero che è uscito dal tiro del tuo dado: ' + dadoGiocatore);
console.log('numero che è uscito dal tiro del dado del computer: ' + dadoComputer);


if (dadoGiocatore > dadoComputer) {
    console.log('Hai vinto');
} else if (dadoGiocatore < dadoComputer) {
    console.log('Hai perso');
} else {
    console.log('Pareggio');
}