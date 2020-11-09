"use strict";
exports.__esModule = true;
exports.Bajka = void 0;
var Bajka = /** @class */ (function () {
    function Bajka(bajka) {
        if (bajka === void 0) { bajka = {}; }
        this.id = bajka.id;
        this.tytuł = bajka.tytuł;
        this.tytułowyBohater = bajka.tytułowyBohater;
        this.bohater = bajka.bohater;
        this.zainteresowanie = bajka.zainteresowanie;
    }
    return Bajka;
}());
exports.Bajka = Bajka;
