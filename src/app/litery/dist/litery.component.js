"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LiteryComponent = void 0;
var core_1 = require("@angular/core");
var LiteryComponent = /** @class */ (function () {
    function LiteryComponent() {
    }
    LiteryComponent.prototype.drop = function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData('text');
        if (data === ev.target.id) {
            ev.target.appendChild(document.getElementById(data));
            var zmiana = document.getElementById(ev.target.id);
            zmiana.style.filter = 'opacity(100%)';
        }
        else {
            alert('Zły ruch. Dopasuj literę jeszcze raz!');
        }
    };
    LiteryComponent.prototype.allowDrop = function (ev) {
        ev.preventDefault();
    };
    LiteryComponent.prototype.drag = function (ev) {
        ev.dataTransfer.setData('text/plain', ev.target.id);
    };
    LiteryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], LiteryComponent.prototype, "list");
    __decorate([
        core_1.Input()
    ], LiteryComponent.prototype, "answearList");
    LiteryComponent = __decorate([
        core_1.Component({
            selector: 'app-litery',
            templateUrl: './litery.component.html',
            styleUrls: ['./litery.component.scss']
        })
    ], LiteryComponent);
    return LiteryComponent;
}());
exports.LiteryComponent = LiteryComponent;
