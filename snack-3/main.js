// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nome = ["Gianni", "Maddalena", "Elisa", "Giovanni", "Maria"];
var cognome = ["Bianchini", "Modonesi", "Scaroni", "Milanese", "Giannotti"];
var listaInvitati =[];
for (var i=0; i<3; i++) {
    listaInvitati.push(nome[Math.floor(Math.random() * nome.length)] + " " + cognome[Math.floor(Math.random() * cognome.length)]);
}

console.log(listaInvitati);