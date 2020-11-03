"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ZwierzetaComponent = void 0;
var core_1 = require("@angular/core");
var ZwierzetaComponent = /** @class */ (function () {
    function ZwierzetaComponent() {
        this.img1 = '/assets/images/gameAnimals/pies.png';
        this.img2 = '/assets/images/gameAnimals/sowa.png';
        this.img3 = '/assets/images/gameAnimals/kot.png';
        this.img4 = '/assets/images/gameAnimals/sarna.png';
        this.zwierze = '';
        this.sowa = '';
        this.kot = '';
        this.sarna = '';
    }
    ZwierzetaComponent.prototype.ngOnInit = function () {
    };
    ZwierzetaComponent = __decorate([
        core_1.Component({
            selector: 'app-zwierzeta',
            templateUrl: './zwierzeta.component.html',
            styleUrls: ['./zwierzeta.component.scss']
        })
    ], ZwierzetaComponent);
    return ZwierzetaComponent;
}());
exports.ZwierzetaComponent = ZwierzetaComponent;
