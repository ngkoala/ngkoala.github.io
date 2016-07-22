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
var tooltip_1 = require('@angular2-material/tooltip/tooltip');
var overlay_1 = require('@angular2-material/core/overlay/overlay');
var radio_1 = require('@angular2-material/radio/radio');
var unique_selection_dispatcher_1 = require('@angular2-material/core/coordination/unique-selection-dispatcher');
var button_1 = require('@angular2-material/button/button');
var TooltipDemo = (function () {
    function TooltipDemo() {
        this.position = 'below';
    }
    TooltipDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tooltip-demo',
            templateUrl: 'tooltip-demo.html',
            styleUrls: ['tooltip-demo.css'],
            directives: [tooltip_1.MD_TOOLTIP_DIRECTIVES, radio_1.MD_RADIO_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES],
            providers: [overlay_1.OVERLAY_PROVIDERS, unique_selection_dispatcher_1.MdUniqueSelectionDispatcher],
        }), 
        __metadata('design:paramtypes', [])
    ], TooltipDemo);
    return TooltipDemo;
}());
exports.TooltipDemo = TooltipDemo;
//# sourceMappingURL=tooltip-demo.js.map