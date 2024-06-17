//funzioni per creare 5 numeri random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione che controlla
function checkAnswer(array1, array2) {
    let result = [];
    for (let i = 0; i < 5; i++) {
        if (array1.includes(array2[i])) {
            result.push(array2[i]);

        }
        console.log(i);
    }
    return result;
}