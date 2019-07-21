'use strict';

let cat = 'Mruczek';
const dog = 'Kruczek';

const sound = (zwierze, odglos) => {
    console.log(zwierze + ' robi ' + odglos);
}

sound('kot','miau');

class Zwierze {
    constructor(imie, gatunek) {
        this.imie = imie;
        this.gatunek = gatunek;
    }

    ruch() {
        console.log('Zwierzę ' + this.imie + ' gatunku ' + this.gatunek + ' poruszyło się');
    }
}

let swinia = new Zwierze('chrumek', 'swinia');

swinia.ruch();