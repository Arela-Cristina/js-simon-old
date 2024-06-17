// Descrizione:
//Visualizzare in pagina 5 numeri casuali.

//Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const userInput = document.getElementById('input');
const button = document.getElementById('button');


//Creiamo un array di 5 numeri casuali.
const arrayNum = [];

for (let i = 0; i < 5; i++) {
    arrayNum.push(randomNumber(1, 100));
}

//Visualizzare in pagina 5 numeri casuali.
let outputNumbers = document.getElementById('text');
outputNumbers.append(arrayNum);
console.log('Siamo i numeri random', arrayNum);


//Da lì parte un timer di 30 secondi.
setTimeout(myFunction, 3000);

//facciamo  sparire i numeri 
function myFunction() {
    outputNumbers.remove();
    //e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    // for (i = 0; i < 5; i++) {
    //     let userInput = prompt('Inserisci i numeri che hai visto nello schermo');
    // }
}

let contatore = 0;
console.log('Sono stati identificati ', contatore, ' numeri');

let answerUser = [];

button.addEventListener('click', function () {
    let userNum = parseInt(userInput.value);
    answerUser.push(userNum);
    console.log('Sono il valore', answerUser);
    if (answerUser.length === 5) {
        let x = checkAnswer(arrayNum, answerUser);
        console.log(x);
    }
});



