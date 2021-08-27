// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var elm1 = [2, 3, 6, 4, 3, 6];
var elm2 = [6, 7];

if (elm1.length < elm2.length) {
    for (i = elm1.length; i < elm2.length; i++) {
        var newNum = Math.floor(Math.random()*10);
        console.log("numero nuovo: " + newNum);
        elm1.push(newNum);
    }
    console.log(elm1)
} else {
    for (i = elm2.length; i < elm1.length; i++) {
        var newNum = Math.floor(Math.random()*10);
        console.log("numero nuovo: " + newNum);
        elm2.push(newNum);
    }
    console.log(elm2);
}