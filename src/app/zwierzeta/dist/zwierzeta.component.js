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
var forms_1 = require("@angular/forms");
var ZwierzetaComponent = /** @class */ (function () {
    function ZwierzetaComponent(fb) {
        this.fb = fb;
        this.form = fb.group({
            kot: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(3), forms_1.Validators.pattern('kot')])],
            pies: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(4), forms_1.Validators.pattern('pies')])],
            sarna: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(5), forms_1.Validators.pattern('sarna')])],
            kon: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(3), forms_1.Validators.pattern('kon')])]
        });
    }
    ZwierzetaComponent.prototype.ngOnInit = function () {
    };
    ZwierzetaComponent.prototype.show = function () {
        alert('WSPANIALE CI POSZŁO!!!');
    };
    __decorate([
        core_1.Input()
    ], ZwierzetaComponent.prototype, "list");
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
