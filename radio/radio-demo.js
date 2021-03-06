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
var checkbox_1 = require('@angular2-material/checkbox/checkbox');
var radio_1 = require('@angular2-material/radio/radio');
var unique_selection_dispatcher_1 = require('@angular2-material/core/coordination/unique-selection-dispatcher');
var RadioDemo = (function () {
    function RadioDemo() {
        this.isDisabled = false;
        this.isAlignEnd = false;
        this.favoriteSeason = 'Autumn';
        this.seasonOptions = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    RadioDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'radio-demo',
            templateUrl: 'radio-demo.html',
            styleUrls: ['radio-demo.css'],
            providers: [unique_selection_dispatcher_1.MdUniqueSelectionDispatcher],
            directives: [checkbox_1.MdCheckbox, radio_1.MD_RADIO_DIRECTIVES, forms_1.FORM_DIRECTIVES, common_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], RadioDemo);
    return RadioDemo;
}());
exports.RadioDemo = RadioDemo;
//# sourceMappingURL=radio-demo.js.map