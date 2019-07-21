'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cat = 'Mruczek';
var dog = 'Kruczek';

var sound = function sound(zwierze, odglos) {
    console.log(zwierze + ' robi ' + odglos);
};

sound('kot', 'miau');

var Zwierze = function () {
    function Zwierze(imie, gatunek) {
        _classCallCheck(this, Zwierze);

        this.imie = imie;
        this.gatunek = gatunek;
    }

    _createClass(Zwierze, [{
        key: 'ruch',
        value: function ruch() {
            console.log('Zwierzę ' + this.imie + ' gatunku ' + this.gatunek + ' poruszyło się');
        }
    }]);

    return Zwierze;
}();

var swinia = new Zwierze('chrumek', 'swinia');

swinia.ruch();
