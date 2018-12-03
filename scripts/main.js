'use strict';

/* Generamos un número al azar (const = math.random) y lo mostramos en consola */

const randomNumber = Math.ceil((Math.random()*100)+1);
console.log(randomNumber);

const btnSelector = document.querySelector('.form__btn');
const inputSelector = document.querySelector('#numberInput');
const hintSelector = document.querySelector('.container__hint');
const counterSelector = document.querySelector('.container__counter');
counterSelector.innerHTML = 0;

function guessNumber(event){
    event.preventDefault();

    const givenNumber = Number(inputSelector.value);
    // mostramos el número en consola y
    console.log(givenNumber);
    // comprobamos si su número coincide con el que hemos generado
    // si no: 
    if(givenNumber !== randomNumber){
        // añadimos un número al contador (++)
        counterSelector.innerHTML ++ ;
        // abajo sale un mensaje "demasiado alto" o "demasiado bajo"
        if(givenNumber > randomNumber){
            hintSelector.innerHTML = "<p>demasiado alto</p>";
        } else {
            hintSelector.innerHTML = "<p>demasiado bajo</p>";
        }
        // si sí: abajo sale un mensaje de "has ganado campeona"
    } else {
        hintSelector.innerHTML = "<p>¡HAS GANADO, CAMPEONA!</p>";
    }

}

btnSelector.addEventListener('click', guessNumber);