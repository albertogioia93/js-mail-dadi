'use strict';


const dadoGiocatore = Math.floor(Math.random() * 6) + 1;
const dadoComputer = Math.floor(Math.random() * 6) + 1;
// console.log(dadoGiocatore);
// console.log(dadoComputer);


if (dadoGiocatore > dadoComputer) {
    console.log('Hai vinto');
} else if (dadoGiocatore < dadoComputer) {
    console.log('Hai perso');
} else {
    console.log('Pareggio');
}