// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var elm1 = [];
for (var i =0; i< Math.floor(Math.random()*50); i++) {
    var elm1Element = Math.floor(Math.random()*10);
    elm1.push(elm1Element);
}
console.log(elm1);

var elm2 = [];
for (var i =0; i< Math.floor(Math.random()*50); i++) {
    var elm2Element = Math.floor(Math.random()*10);
    elm1.push(elm2Element);
}
console.log(elm1);

if (elm1.length < elm2.length) {
    for (i = elm1.length; i < elm2.length; i++) {
        var newNum = Math.floor(Math.random()*10);
        console.log("numero nuovo: " + newNum);
        elm1.push(newNum);
    }
    console.log(elm1)
} else if (elm2.length < elm1.length) {
    for (i = elm2.length; i < elm1.length; i++) {
        var newNum = Math.floor(Math.random()*10);
        console.log("numero nuovo: " + newNum);
        elm2.push(newNum);
    }
    console.log(elm2);
} else {
    console.log("Le due liste hanno lo stesso numero di elementi");
}