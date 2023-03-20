//Dati da richiedere
const age =parseInt( prompt("Inserisci la tua età", 23));

const kmDaPercorrere =parseFloat(prompt("Quanti Km dovrai percorrere?", 30));

//Dati in possesso
const prezzoAlKm = 0.21;

const discountUnder = 20;

const discountOver = 40;

//Risultati delle operazioni
let prezzoLordo = kmDaPercorrere * prezzoAlKm;
console.log(prezzoLordo);


