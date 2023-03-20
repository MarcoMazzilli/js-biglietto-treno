# Biglietto del treno 
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
---
---
## Informazioni in possesso 
- Prezzo al km.:  `€ 0.21`
- Sconto Under 18: `20 %`
- Sconto Over 65 : `40 %`
---
## Informazioni mancanti
- N. km da percorrere
- Età del passeggero
- Prezzo finale del biglietto
---
## Procedimento : 
1. Salvo in una `variabile` l'età del passeggero richiesta tramite `prompt`.
1. Richiedo quanti `Km` il passeggero deve percorrere e salvo l'informazione in una `variabile` tramite `prompt`.
1. Moltiplico il n. di `km` da percorrere al "prezzo per Km" (`€ 0.21`) per ottenere il prezzo totale del biglietto.
1. Arrotondo la cifra ottenuta con un massimo di due decimali
1. In base all'età del passeggero decido se applicare uno sconto oppure no, seguendo questa logica :
```
- IF l'età < 18 --> Sconto 20%
- ELSE IF  > 65 --> Sconto 40%
- Else          --> Prezzo non scontato
```
- Questo mi restituisce il `prezzo finale del biglietto`
### Bonus 
- Creo una grafica del biglietto e ci stampo dentro i dati.

