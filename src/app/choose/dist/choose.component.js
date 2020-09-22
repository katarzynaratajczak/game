"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChooseComponent = void 0;
var imageForChoose_1 = require("./../models/imageForChoose");
var core_1 = require("@angular/core");
var ChooseComponent = /** @class */ (function () {
    function ChooseComponent() {
        this.kitchenList = new Array();
        this.bathroomList = new Array();
        this.badList = new Array();
    }
    ChooseComponent.prototype.ngOnInit = function () {
        this.fillKitchenList();
        this.fillBathroomList();
        this.fillBadList();
    };
    ChooseComponent.prototype.fillKitchenList = function () {
        for (var i = 0; i < 6; i++) {
            var imageToList = new imageForChoose_1.ImageForChosse();
            imageToList.imagePath = '/assets/images/gameChoose/kitchen/' + i + '.png';
            this.kitchenList.push(imageToList);
        }
    };
    ChooseComponent.prototype.fillBadList = function () {
        for (var i = 0; i < 4; i++) {
            var imageToList = new imageForChoose_1.ImageForChosse();
            imageToList.imagePath = '/assets/images/gameChoose/bad/' + i + '.png';
            this.badList.push(imageToList);
        }
    };
    ChooseComponent.prototype.fillBathroomList = function () {
        for (var i = 0; i < 8; i++) {
            var imageToList = new imageForChoose_1.ImageForChosse();
            imageToList.imagePath = '/assets/images/gameChoose/bathroom/' + i + '.png';
            this.bathroomList.push(imageToList);
        }
    };
    ChooseComponent = __decorate([
        core_1.Component({
            selector: 'app-choose',
            templateUrl: './choose.component.html',
            styleUrls: ['./choose.component.scss']
        })
    ], ChooseComponent);
    return ChooseComponent;
}());
exports.ChooseComponent = ChooseComponent;
