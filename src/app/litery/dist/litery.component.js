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
    // drop2(ev) {
    //   ev.preventDefault();
    //   this.data = ev.dataTransfer.getData('drag2');
    //   ev.target.appendChild(document.getElementById(this.data));
    // }
    // allowDrop2(ev) {
    //   ev.preventDefault();
    // }
    // drag2(ev) {
    //   ev.dataTransfer.setData('drag3', ev.target.id);
    // }
    // drop3(ev) {
    //   ev.preventDefault();
    //   this.data = ev.dataTransfer.getData('drag3');
    //   ev.target.appendChild(document.getElementById(this.data));
    // }
    // allowDrop3(ev) {
    //   ev.preventDefault();
    // }
    // drag3(ev) {
    //   ev.dataTransfer.setData('drag2', ev.target.id);
    // }
    // drop4(ev) {
    //   ev.preventDefault();
    //   this.data = ev.dataTransfer.getData('drag4');
    //   ev.target.appendChild(document.getElementById(this.data));
    // }
    // allowDrop4(ev) {
    //   ev.preventDefault();
    // }
    // drag4(ev) {
    //   ev.dataTransfer.setData('drag1', ev.target.id);
    // }
    function LiteryComponent() {
    }
    LiteryComponent.prototype.drop = function (ev) {
        ev.preventDefault();
        this.data = ev.dataTransfer.getData(this.list.id);
        ev.target.appendChild(document.getElementById(this.data));
    };
    LiteryComponent.prototype.allowDrop = function (ev) {
        ev.preventDefault();
    };
    LiteryComponent.prototype.drag = function (ev) {
        ev.dataTransfer.setData(this.list.id, ev.target.id);
        if (this.list.id === this.list.id) {
            console.log('Jest dobrze');
        }
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
