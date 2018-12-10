'use strict';

const btnSelector = document.querySelector('.form__btn');
const inputSelector = document.querySelector('#numberInput');
const hintSelector = document.querySelector('.container__future-hint');
const counterSelector = document.querySelector('.container__counter');
counterSelector.innerHTML = 0;

/* Generamos un número al azar (const = math.random) y lo mostramos en consola */
function randomNumber(max){

    return Math.ceil((Math.random()*max)+1);

}
const r = randomNumber(99); 
console.log(r);

function guessNumber(event){

    event.preventDefault();
    const givenNumber = Number(inputSelector.value);
    // mostramos el número en consola 
    console.log(givenNumber);
    // añadimos un número al contador (++)
    counterSelector.innerHTML ++ ;
    // comprobamos si el número introducido coincide con el random o no
    function guessMessage(){
        if(givenNumber > r){
            hintSelector.innerHTML = '<div class="container__hint"><p>demasiado alto</p></div>';
        } else if(givenNumber < r) {
            hintSelector.innerHTML = '<div class="container__hint"><p>demasiado bajo</p></div>';
        } else {
        hintSelector.innerHTML = '<div class="container__hint-success"><p>¡HAS GANADO, CAMPEONA!</p>';
        }
    }
    guessMessage();

}

btnSelector.addEventListener('click', guessNumber);