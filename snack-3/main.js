// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nome = ["Gianni", "Maddalena", "Elisa", "Giovanni", "Maria"];
var cognome = ["Bianchini", "Modonesi", "Scaroni", "Milanese", "Giannotti"];
var listaInvitati =[];
for (var i=0; i<3; i++) {
    var invitato = nome[Math.floor(Math.random() * 5)] + " " +cognome[Math.floor(Math.random() * 5)];
    listaInvitati.push(invitato);
}

console.log(listaInvitati);