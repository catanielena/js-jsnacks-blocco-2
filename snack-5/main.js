// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var elm1 = [];
for (var i =0; i< Math.floor(Math.random()*50); i++) {
    elm1.push(Math.floor(Math.random()*10));
}
console.log(elm1);

var elm2 = [];
for (var i =0; i< Math.floor(Math.random()*50); i++) {
    elm1.push(Math.floor(Math.random()*10));
}
console.log(elm1);

// if (elm1.length < elm2.length) {
//     i = elm1.length;
//     while (i < elm2.length) {
//         var newNum = Math.floor(Math.random()*10);
//         console.log("new number: " + newNum);
//         elm1.push(newNum);
//         i++;
//     }
//     console.log(elm1);
// } else if (elm2.length < elm1.length) {
//     i = elm2.length;
//     while (i < elm1.length) {
//         var newNum = Math.floor(Math.random()*10);
//         console.log("new number: " + newNum);
//         elm2.push(newNum);
//         i++;
//     }
//     console.log(elm2);
// } else {
//     console.log("Le due liste hanno lo stesso numero di elementi");
// }

// Soluzione ottimizzata
if (elm1.length == elm2.length) {
    console.log("Le due liste hanno lo stesso numero di elementi");
} else {
        while (elm1.length < elm2.length) {
            elm1.push(Math.floor(Math.random()*10));
        }

        while (elm2.length < elm1.length) {
        elm2.push(Math.floor(Math.random()*10));
    }
}