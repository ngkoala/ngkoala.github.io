// TODO(kara): keyboard events for menu navigation
// TODO(kara): prevent-close functionality
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var menu_errors_1 = require('./menu-errors');
var MdMenu = (function () {
    function MdMenu(posX, posY) {
        this._showClickCatcher = false;
        this.positionX = 'after';
        this.positionY = 'below';
        this.close = new core_1.EventEmitter;
        if (posX) {
            this._setPositionX(posX);
        }
        if (posY) {
            this._setPositionY(posY);
        }
    }
    Object.defineProperty(MdMenu.prototype, "classList", {
        /**
         * This method takes classes set on the host md-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param classes list of class names
         */
        set: function (classes) {
            this._classList = classes.split(' ').reduce(function (obj, className) {
                obj[className] = true;
                return obj;
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This function toggles the display of the menu's click catcher element.
     * This element covers the viewport when the menu is open to detect clicks outside the menu.
     * TODO: internal
     */
    MdMenu.prototype._setClickCatcher = function (bool) {
        this._showClickCatcher = bool;
    };
    MdMenu.prototype._setPositionX = function (pos) {
        if (pos !== 'before' && pos !== 'after') {
            throw new menu_errors_1.MdMenuInvalidPositionX();
        }
        this.positionX = pos;
    };
    MdMenu.prototype._setPositionY = function (pos) {
        if (pos !== 'above' && pos !== 'below') {
            throw new menu_errors_1.MdMenuInvalidPositionY();
        }
        this.positionY = pos;
    };
    MdMenu.prototype._emitCloseEvent = function () {
        this.close.emit(null);
    };
    __decorate([
        core_1.ViewChild(core_1.TemplateRef), 
        __metadata('design:type', core_1.TemplateRef)
    ], MdMenu.prototype, "templateRef", void 0);
    __decorate([
        core_1.Input('class'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MdMenu.prototype, "classList", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MdMenu.prototype, "close", void 0);
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
        __param(0, core_1.Attribute('x-position')),
        __param(1, core_1.Attribute('y-position')), 
        __metadata('design:paramtypes', [String, String])
    ], MdMenu);
    return MdMenu;
}());
exports.MdMenu = MdMenu;
//# sourceMappingURL=menu-directive.js.map