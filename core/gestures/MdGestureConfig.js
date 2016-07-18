"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var platform_browser_1 = require('@angular/platform-browser');
/* Adjusts configuration of our gesture library, Hammer. */
var MdGestureConfig = (function (_super) {
    __extends(MdGestureConfig, _super);
    function MdGestureConfig() {
        _super.apply(this, arguments);
        /* List of new event names to add to the gesture support list */
        this.events = [
            'drag',
            'dragstart',
            'dragend',
            'dragright',
            'dragleft',
            'longpress',
            'slide',
            'slidestart',
            'slideend',
            'slideright',
            'slideleft'
        ];
    }
    /*
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://www.google.com/design/spec/patterns/gestures.html#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * TODO: Confirm threshold numbers with Material Design UX Team
     * */
    MdGestureConfig.prototype.buildHammer = function (element) {
        var mc = new Hammer(element);
        // Create custom gesture recognizers
        var drag = this._createRecognizer(Hammer.Pan, { event: 'drag', threshold: 6 }, Hammer.Swipe);
        var slide = this._createRecognizer(Hammer.Pan, { event: 'slide', threshold: 0 }, Hammer.Swipe);
        var longpress = this._createRecognizer(Hammer.Press, { event: 'longpress', time: 500 });
        var pan = new Hammer.Pan();
        var swipe = new Hammer.Swipe();
        // Overwrite the default `pan` event to use the swipe event.
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([drag, slide, pan, longpress]);
        return mc;
    };
    /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
    MdGestureConfig.prototype._createRecognizer = function (type, options) {
        var extra = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            extra[_i - 2] = arguments[_i];
        }
        var recognizer = new type(options);
        // Add the default recognizer to the new custom recognizer.
        extra.push(type);
        extra.forEach(function (entry) { return recognizer.recognizeWith(new entry()); });
        return recognizer;
    };
    MdGestureConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MdGestureConfig);
    return MdGestureConfig;
}(platform_browser_1.HammerGestureConfig));
exports.MdGestureConfig = MdGestureConfig;
//# sourceMappingURL=MdGestureConfig.js.map