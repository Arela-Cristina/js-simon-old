//funzioni per creare 5 numeri random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}