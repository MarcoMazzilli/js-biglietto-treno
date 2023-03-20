//Dati da richiedere
const age =parseInt( prompt("Inserisci la tua età", 18));

const kmDaPercorrere =parseFloat(prompt("Quanti Km dovrai percorrere?", 37.123454));

//Dati in possesso
const prezzoAlKm = 0.21;

const discountUnder = 20;

const discountOver = 40;

//Risultati delle operazioni
let prezzoLordoDecimale = kmDaPercorrere * prezzoAlKm;
let prezzoLordo =parseFloat(prezzoLordoDecimale.toFixed(2));

console.log('Prezzo totale non scontato (lordo) -->',prezzoLordo);


if (age <= 18){
  prezzoNetto = prezzoLordo - (prezzoLordo * discountUnder / 100);
}else if (age >= 65){
  prezzoNetto = prezzoLordo - (prezzoLordo * discountOver / 100);
}else {
  prezzoNetto = prezzoLordo
}

console.log('Prezzo finale già scontato -->', prezzoNetto)


