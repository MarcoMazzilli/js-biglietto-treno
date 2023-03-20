//Dati da richiedere
const age =parseInt( prompt("Inserisci la tua età", 50));

const kmDaPercorrere =parseFloat(prompt("Quanti Km dovrai percorrere?", 30));

//Dati in possesso
const prezzoAlKm = 0.21;

const discountUnder = 20;

const discountOver = 40;

//Risultati delle operazioni
let prezzoLordo = kmDaPercorrere * prezzoAlKm;
console.log(prezzoLordo);

if (age <= 18){
  prezzoNetto = prezzoLordo - (prezzoLordo * discountUnder / 100);
}else if (age >= 65){
  prezzoNetto = prezzoLordo - (prezzoLordo * discountOver / 100);
}else {
  prezzoNetto = prezzoLordo
}

console.log(prezzoNetto)


