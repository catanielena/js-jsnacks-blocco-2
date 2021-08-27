// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// versione for
var somma = 0;
for (var i=0; i<5; i++) {
    var num = parseInt(prompt("Inserisci un numero"));
    while (isNaN(num)) {
        num = parseInt(prompt("Errore! inserisci un numero"));
    }
    somma += num;
}
console.log(somma);

// versione while
var somma = 0;
var i=0;
while (i<5) {
    do {
        var num = parseInt(prompt("Inserisci un numero"));
        if(isNaN(num)) {
            alert("Errore inserisci un numero!");
        }
    } while (isNaN(num));
    somma += num;
    i++;
}
console.log(somma);


