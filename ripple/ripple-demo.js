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
var card_1 = require('@angular2-material/card/card');
var checkbox_1 = require('@angular2-material/checkbox/checkbox');
var icon_1 = require('@angular2-material/icon/icon');
var input_1 = require('@angular2-material/input/input');
var radio_1 = require('@angular2-material/radio/radio');
var unique_selection_dispatcher_1 = require('@angular2-material/core/coordination/unique-selection-dispatcher');
var core_2 = require('@angular2-material/core/core');
var RippleDemo = (function () {
    function RippleDemo() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
        this.rounded = false;
        this.maxRadius = null;
        this.rippleSpeed = 1;
        this.rippleColor = '';
        this.rippleBackgroundColor = '';
    }
    RippleDemo.prototype.doManualRipple = function () {
        var _this = this;
        if (this.manualRipple) {
            window.setTimeout(function () { return _this.manualRipple.start(); }, 10);
            window.setTimeout(function () { return _this.manualRipple.end(0, 0); }, 500);
        }
    };
    __decorate([
        core_1.ViewChild(core_2.MdRipple), 
        __metadata('design:type', core_2.MdRipple)
    ], RippleDemo.prototype, "manualRipple", void 0);
    RippleDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ripple-demo',
            templateUrl: 'ripple-demo.html',
            styleUrls: ['ripple-demo.css'],
            providers: [unique_selection_dispatcher_1.MdUniqueSelectionDispatcher],
            directives: [
                button_1.MD_BUTTON_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                checkbox_1.MD_CHECKBOX_DIRECTIVES,
                icon_1.MD_ICON_DIRECTIVES,
                input_1.MD_INPUT_DIRECTIVES,
                radio_1.MD_RADIO_DIRECTIVES,
                core_2.MD_RIPPLE_DIRECTIVES,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], RippleDemo);
    return RippleDemo;
}());
exports.RippleDemo = RippleDemo;
//# sourceMappingURL=ripple-demo.js.map