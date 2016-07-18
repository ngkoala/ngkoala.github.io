"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var button_1 = require('@angular2-material/button/button');
var icon_1 = require('@angular2-material/icon/icon');
var ButtonDemo = (function () {
    function ButtonDemo() {
        this.isDisabled = false;
        this.clickCounter = 0;
    }
    ButtonDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'button-demo',
            templateUrl: 'button-demo.html',
            styleUrls: ['button-demo.css'],
            directives: [button_1.MdButton, button_1.MdAnchor, icon_1.MdIcon]
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonDemo);
    return ButtonDemo;
}());
exports.ButtonDemo = ButtonDemo;
//# sourceMappingURL=button-demo.js.map