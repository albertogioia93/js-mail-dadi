'use strict';

// chiedo all'utente la sua email
const emailUtente = prompt('Inserisci la tua email');

// creo una lista di email
const listaEmail = ["index@gmail.it", "css@gmail.it", "js@gmail.it"];

let accettazione = false;

// uso un ciclo per scorrere la lista di email
for (let i = 0; i < listaEmail.length; i++){
    const email = listaEmail[i];
    if (email === emailUtente){
        accettazione = true;
    }
}

// stampo il risultato dell'accettazione
if (accettazione === true){
    alert ('email in lista');
} else {
    alert ('email non in lista');
}
