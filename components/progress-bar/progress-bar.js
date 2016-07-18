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
// TODO(josephperrott): Benchpress tests.
// TODO(josephperrott): Add ARIA attributes for progressbar "for".
/**
 * <md-progress-bar> component.
 */
var MdProgressBar = (function () {
    function MdProgressBar() {
        /** Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow. */
        this._value = 0;
        /** Buffer value of the progress bar. Defaults to zero. */
        this._bufferValue = 0;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        this.mode = 'determinate';
    }
    Object.defineProperty(MdProgressBar.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = clamp(v || 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressBar.prototype, "bufferValue", {
        get: function () {
            return this._bufferValue;
        },
        set: function (v) {
            this._bufferValue = clamp(v || 0);
        },
        enumerable: true,
        configurable: true
    });
    /** Gets the current transform value for the progress bar's primary indicator. */
    MdProgressBar.prototype._primaryTransform = function () {
        var scale = this.value / 100;
        return { transform: "scaleX(" + scale + ")" };
    };
    /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     */
    MdProgressBar.prototype._bufferTransform = function () {
        if (this.mode == 'buffer') {
            var scale = this.bufferValue / 100;
            return { transform: "scaleX(" + scale + ")" };
        }
    };
    __decorate([
        core_1.Input(),
        core_1.HostBinding('attr.aria-valuenow'), 
        __metadata('design:type', Object)
    ], MdProgressBar.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdProgressBar.prototype, "bufferValue", null);
    __decorate([
        core_1.Input(),
        core_1.HostBinding('attr.mode'), 
        __metadata('design:type', Object)
    ], MdProgressBar.prototype, "mode", void 0);
    MdProgressBar = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-progress-bar',
            host: {
                'role': 'progressbar',
                'aria-valuemin': '0',
                'aria-valuemax': '100',
            },
            templateUrl: 'progress-bar.html',
            styleUrls: ['progress-bar.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            directives: [common_1.NgStyle],
        }), 
        __metadata('design:paramtypes', [])
    ], MdProgressBar);
    return MdProgressBar;
}());
exports.MdProgressBar = MdProgressBar;
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}
exports.MD_PROGRESS_BAR_DIRECTIVES = [MdProgressBar];
//# sourceMappingURL=progress-bar.js.map