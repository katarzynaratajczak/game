"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var puzzle_component_1 = require("./puzzle/puzzle.component");
var zwierzeta_component_1 = require("./zwierzeta/zwierzeta.component");
var owoce_component_1 = require("./owoce/owoce.component");
var litery_component_1 = require("./litery/litery.component");
var forms_1 = require("@angular/forms");
var puzzle_logika_component_1 = require("./puzzle-logika/puzzle-logika.component");
var litery_logika_component_1 = require("./litery-logika/litery-logika.component");
var ukladanka_component_1 = require("./ukladanka/ukladanka.component");
var ukladanka_logika_component_1 = require("./ukladanka-logika/ukladanka-logika.component");
var start_component_1 = require("./start/start.component");
var zwierzeta_logika_component_1 = require("./zwierzeta-logika/zwierzeta-logika.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                puzzle_component_1.PuzzleComponent,
                zwierzeta_component_1.ZwierzetaComponent,
                owoce_component_1.OwoceComponent,
                litery_component_1.LiteryComponent,
                puzzle_logika_component_1.PuzzleLogikaComponent,
                litery_logika_component_1.LiteryLogikaComponent,
                ukladanka_component_1.UkladankaComponent,
                ukladanka_logika_component_1.UkladankaLogikaComponent,
                start_component_1.StartComponent,
                zwierzeta_logika_component_1.ZwierzetaLogikaComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
