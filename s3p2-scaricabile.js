// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

// ESERCIZI IN HTML

// ESERCIZIO 1: FATTO Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: FATTO Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: FATTO Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: FATTO Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: FATTO Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: FATTO Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

// ESERCIZI IN JS
// ESERCIZIO 7: FATTO Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: FATTO Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: FATTO Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: DIFFICOLTA' Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: FATTO Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

let myTitle = document.getElementById("title");
myTitle.innerText = "Titolo modificato con JS!";
console.log (myTitle);

let myWallpaperColor = document.getElementById("bgcolor");
myWallpaperColor.style.background = "violet";
console.log (myWallpaperColor);

let myClassDivs = document.getElementsByClassName("pic_phone");
myClassDivs.style.display = "prova"
console.log(myClassDivs);

let myFooter = document.getElementById("indirizzo_bottom");
myFooter.innerText = "Epicode - Via Indirizzo Modificato con JS, 123 - Milano";
console.log (myFooter);

let myAmazon = document.getElementsByTagName ("a");
myAmazon.style.color = "green";
console.log (myAmazon);

