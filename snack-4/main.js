// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

var numbers = [1, 5, 12, 6, 74, 55, 15, 34, 3, 7, 6, 48, 573, 45];

var sum = 0;

for (var i=0; i<numbers.length; i++) {
    if (i % 2 == 1) {
        sum += numbers[i]
        console.log("indice: " + i);
        console.log("numero: " + numbers[i]);
        console.log("somma parziale= " + sum);
    }
}

console.log("somma totale= " + sum)