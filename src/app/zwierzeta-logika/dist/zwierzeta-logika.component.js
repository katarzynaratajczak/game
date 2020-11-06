"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ZwierzetaLogikaComponent = void 0;
var imageForAnimals_1 = require("./../models/imageForAnimals");
var core_1 = require("@angular/core");
var ZwierzetaLogikaComponent = /** @class */ (function () {
    function ZwierzetaLogikaComponent() {
        this.imageList = [];
    }
    ZwierzetaLogikaComponent.prototype.ngOnInit = function () {
        console.log('zwierze logika');
        this.fillImageList();
    };
    ZwierzetaLogikaComponent.prototype.fillImageList = function () {
        for (var i = 0; i < 4; i++) {
            var image = new imageForAnimals_1.ImageForAnimals();
            image.imagePath = '/assets/images/gameAnimals/' + i + '.png';
            this.imageList.push(image);
            console.log(image);
        }
    };
    ZwierzetaLogikaComponent = __decorate([
        core_1.Component({
            selector: 'app-zwierzeta-logika',
            templateUrl: './zwierzeta-logika.component.html',
            styleUrls: ['./zwierzeta-logika.component.scss']
        })
    ], ZwierzetaLogikaComponent);
    return ZwierzetaLogikaComponent;
}());
exports.ZwierzetaLogikaComponent = ZwierzetaLogikaComponent;
