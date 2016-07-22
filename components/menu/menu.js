// TODO(kara): keyboard events for menu navigation
// TODO(kara): prevent-close functionality
// TODO(kara): set position of menu
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
        this._showClickCatcher = false;
        this.close = new core_1.EventEmitter;
    }
    /**
     * This function toggles the display of the menu's click catcher element.
     * This element covers the viewport when the menu is open to detect clicks outside the menu.
     * TODO: internal
     */
    MdMenu.prototype._setClickCatcher = function (bool) {
        this._showClickCatcher = bool;
    };
    MdMenu.prototype._emitCloseEvent = function () {
        this.close.emit(null);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MdMenu.prototype, "close", void 0);
    __decorate([
        core_1.ViewChild(core_1.TemplateRef), 
        __metadata('design:type', core_1.TemplateRef)
    ], MdMenu.prototype, "templateRef", void 0);
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
//# sourceMappingURL=menu.js.map