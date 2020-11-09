"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var bajka_component_1 = require("./bajka/bajka.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var litery_logika_component_1 = require("./litery-logika/litery-logika.component");
var owoce_component_1 = require("./owoce/owoce.component");
var puzzle_component_1 = require("./puzzle/puzzle.component");
var start_component_1 = require("./start/start.component");
var ukladanka_logika_component_1 = require("./ukladanka-logika/ukladanka-logika.component");
var zwierzeta_logika_component_1 = require("./zwierzeta-logika/zwierzeta-logika.component");
var routes = [
    { path: 'litery-logika', component: litery_logika_component_1.LiteryLogikaComponent },
    { path: 'owoce', component: owoce_component_1.OwoceComponent },
    { path: 'puzzle', component: puzzle_component_1.PuzzleComponent },
    { path: 'zwierzeta-logika', component: zwierzeta_logika_component_1.ZwierzetaLogikaComponent },
    { path: 'ukladanka', component: ukladanka_logika_component_1.UkladankaLogikaComponent },
    { path: 'start', component: start_component_1.StartComponent },
    { path: 'bajka', component: bajka_component_1.BajkaComponent },
    { path: '', redirectTo: '/start', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
