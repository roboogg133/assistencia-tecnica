const leftButton    = document.getElementById("carrossel-left");
const rightButton   = document.getElementById("carrossel-right");
const carrossel     = document.getElementById("carrossel");



const cards = Array.from(carrossel.children);
const totalCards = cards.length

let index = 0;
