// Descrizione:
//Visualizzare in pagina 5 numeri casuali.

//Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//Creiamo un array di 5 numeri casuali.
const arrayNum = [];

for (let i = 0; i < 5; i++) {
    arrayNum.push(randomNumber(1, 100));
}

//Visualizzare in pagina 5 numeri casuali.
let outputNumbers = document.getElementById('text');
outputNumbers.append(arrayNum);
console.log('Siamo i numeri random', arrayNum);

//facciamo  sparire i numeri 
outputNumbers.remove(arrayNum);


//Da lì parte un timer di 30 secondi.
setTimeout(myFunction, 3000);
function myFunction() {
    //e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    for (i = 0; i < 5; i++) {
        let userInput = prompt('Inserisci i numeri che hai visto nello schermo');
    }
}

