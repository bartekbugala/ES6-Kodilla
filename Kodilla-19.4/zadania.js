'use strict';

// Zad.1 Połączenie 2 Stringów bez concat, join, oraz +
const greet = 'Hello';
const thing = 'World';
console.log (`${greet} ${thing}`);

// Zad.2 Arrow function z domyślnym 1 w drugim argumencie
const multiply = (number1, number2 = 1) => {return number1 * number2};
console.log(multiply(2,3));
console.log(multiply(5));

// Zad 3. średnia arytmetyczna z arguemntów
const average = (...args) => {
    let sum = 0;
    args.forEach(arg => sum += arg);
    return sum/args.length;
}
console.log(`Average of 1: ${average(1)}`);
console.log(`Average of 2,3,4,5: ${average(2,3,4,5)}`);

// Zad 4. Tablicę z ocenami grades przekaż do funckji average (korzystając z operatora spred)
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// Zad. 5 Destrukturyzacja w celu wyciągnięcia imienia i nazwiska z dziwnej struktury danych
const weirdDataStructure = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = weirdDataStructure;
console.log(`${firstName} ${lastName}`);