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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var button_toggle_1 = require('@angular2-material/button-toggle/button-toggle');
var unique_selection_dispatcher_1 = require('@angular2-material/core/coordination/unique-selection-dispatcher');
var icon_1 = require('@angular2-material/icon/icon');
var ButtonToggleDemo = (function () {
    function ButtonToggleDemo() {
        this.favoritePie = 'Apple';
        this.pieOptions = [
            'Apple',
            'Cherry',
            'Pecan',
            'Lemon',
        ];
    }
    ButtonToggleDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'button-toggle-demo',
            templateUrl: 'button-toggle-demo.html',
            providers: [unique_selection_dispatcher_1.MdUniqueSelectionDispatcher],
            directives: [button_toggle_1.MD_BUTTON_TOGGLE_DIRECTIVES, forms_1.FORM_DIRECTIVES, icon_1.MdIcon, common_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonToggleDemo);
    return ButtonToggleDemo;
}());
exports.ButtonToggleDemo = ButtonToggleDemo;
//# sourceMappingURL=button-toggle-demo.js.map