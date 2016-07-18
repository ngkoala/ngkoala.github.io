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
var MdMenu = (function () {
    function MdMenu() {
    }
    MdMenu = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-menu',
            host: { 'role': 'menu' },
            templateUrl: 'menu.html',
            styleUrls: ['menu.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            exportAs: 'mdMenu'
        }), 
        __metadata('design:paramtypes', [])
    ], MdMenu);
    return MdMenu;
}());
exports.MdMenu = MdMenu;
var MdMenuItem = (function () {
    function MdMenuItem() {
    }
    MdMenuItem = __decorate([
        core_1.Directive({
            selector: '[md-menu-item]',
            host: { 'role': 'menuitem' }
        }), 
        __metadata('design:paramtypes', [])
    ], MdMenuItem);
    return MdMenuItem;
}());
exports.MdMenuItem = MdMenuItem;
exports.MD_MENU_DIRECTIVES = [MdMenu, MdMenuItem];
//# sourceMappingURL=menu.js.map