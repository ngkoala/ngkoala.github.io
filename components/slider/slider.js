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
var field_value_1 = require('@angular2-material/core/annotations/field-value');
var apply_transform_1 = require('@angular2-material/core/style/apply-transform');
var MdSlider = (function () {
    function MdSlider(elementRef) {
        /** A renderer to handle updating the slider's thumb and fill track. */
        this._renderer = null;
        /** The dimensions of the slider. */
        this._sliderDimensions = null;
        this.disabled = false;
        /** The miniumum value that the slider can have. */
        this._min = 0;
        /** The maximum value that the slider can have. */
        this._max = 100;
        /** The percentage of the slider that coincides with the value. */
        this._percent = 0;
        /** The values at which the thumb will snap. */
        this.step = 1;
        /**
         * Whether or not the thumb is currently being dragged.
         * Used to determine if there should be a transition for the thumb and fill track.
         * TODO: internal
         */
        this.isDragging = false;
        /**
         * Whether or not the slider is active (clicked or is being dragged).
         * Used to shrink and grow the thumb as according to the Material Design spec.
         * TODO: internal
         */
        this.isActive = false;
        /** Indicator for if the value has been set or not. */
        this._isInitialized = false;
        /** Value of the slider. */
        this._value = 0;
        this._renderer = new SliderRenderer(elementRef);
    }
    Object.defineProperty(MdSlider.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (v) {
            // This has to be forced as a number to handle the math later.
            this._min = Number(v);
            // If the value wasn't explicitly set by the user, set it to the min.
            if (!this._isInitialized) {
                this.value = this._min;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = Number(v);
            this._isInitialized = true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Once the slider has rendered, grab the dimensions and update the position of the thumb and
     * fill track.
     * TODO: internal
     */
    MdSlider.prototype.ngAfterContentInit = function () {
        this._sliderDimensions = this._renderer.getSliderDimensions();
        this.snapToValue();
    };
    /** TODO: internal */
    MdSlider.prototype.onClick = function (event) {
        if (this.disabled) {
            return;
        }
        this.isActive = true;
        this.isDragging = false;
        this._renderer.addFocus();
        this.updateValueFromPosition(event.clientX);
        this.snapToValue();
    };
    /** TODO: internal */
    MdSlider.prototype.onDrag = function (event) {
        if (this.disabled) {
            return;
        }
        // Prevent the drag from selecting anything else.
        event.preventDefault();
        this.updateValueFromPosition(event.center.x);
    };
    /** TODO: internal */
    MdSlider.prototype.onDragStart = function (event) {
        if (this.disabled) {
            return;
        }
        event.preventDefault();
        this.isDragging = true;
        this.isActive = true;
        this._renderer.addFocus();
        this.updateValueFromPosition(event.center.x);
    };
    /** TODO: internal */
    MdSlider.prototype.onDragEnd = function () {
        this.isDragging = false;
        this.snapToValue();
    };
    /** TODO: internal */
    MdSlider.prototype.onResize = function () {
        this.isDragging = true;
        this._sliderDimensions = this._renderer.getSliderDimensions();
        // Skip updating the value and position as there is no new placement.
        this._renderer.updateThumbAndFillPosition(this._percent, this._sliderDimensions.width);
    };
    /** TODO: internal */
    MdSlider.prototype.onBlur = function () {
        this.isActive = false;
    };
    /**
     * When the value changes without a physical position, the percentage needs to be recalculated
     * independent of the physical location.
     * This is also used to move the thumb to a snapped value once dragging is done.
     */
    MdSlider.prototype.updatePercentFromValue = function () {
        this._percent = (this.value - this.min) / (this.max - this.min);
    };
    /**
     * Calculate the new value from the new physical location. The value will always be snapped.
     */
    MdSlider.prototype.updateValueFromPosition = function (pos) {
        var offset = this._sliderDimensions.left;
        var size = this._sliderDimensions.width;
        // The exact value is calculated from the event and used to find the closest snap value.
        this._percent = this.clamp((pos - offset) / size);
        var exactValue = this.min + (this._percent * (this.max - this.min));
        // This calculation finds the closest step by finding the closest whole number divisible by the
        // step relative to the min.
        var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min;
        // The value needs to snap to the min and max.
        this.value = this.clamp(closestValue, this.min, this.max);
        this._renderer.updateThumbAndFillPosition(this._percent, this._sliderDimensions.width);
    };
    /**
     * Snaps the thumb to the current value.
     * Called after a click or drag event is over.
     */
    MdSlider.prototype.snapToValue = function () {
        this.updatePercentFromValue();
        this._renderer.updateThumbAndFillPosition(this._percent, this._sliderDimensions.width);
    };
    /**
     * Return a number between two numbers.
     */
    MdSlider.prototype.clamp = function (value, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        return Math.max(min, Math.min(value, max));
    };
    __decorate([
        core_1.Input(),
        field_value_1.BooleanFieldValue(),
        core_1.HostBinding('class.md-slider-disabled'),
        core_1.HostBinding('attr.aria-disabled'), 
        __metadata('design:type', Boolean)
    ], MdSlider.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdSlider.prototype, "step", void 0);
    __decorate([
        core_1.Input(),
        core_1.HostBinding('attr.aria-valuemin'), 
        __metadata('design:type', Object)
    ], MdSlider.prototype, "min", null);
    __decorate([
        core_1.Input(),
        core_1.HostBinding('attr.aria-valuemax'), 
        __metadata('design:type', Object)
    ], MdSlider.prototype, "max", null);
    __decorate([
        core_1.Input(),
        core_1.HostBinding('attr.aria-valuenow'), 
        __metadata('design:type', Object)
    ], MdSlider.prototype, "value", null);
    MdSlider = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-slider',
            host: {
                'tabindex': '0',
                '(click)': 'onClick($event)',
                '(drag)': 'onDrag($event)',
                '(dragstart)': 'onDragStart($event)',
                '(dragend)': 'onDragEnd()',
                '(window:resize)': 'onResize()',
                '(blur)': 'onBlur()',
            },
            templateUrl: 'slider.html',
            styleUrls: ['slider.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdSlider);
    return MdSlider;
}());
exports.MdSlider = MdSlider;
/**
 * Renderer class in order to keep all dom manipulation in one place and outside of the main class.
 */
var SliderRenderer = (function () {
    function SliderRenderer(elementRef) {
        this._sliderElement = elementRef.nativeElement;
    }
    /**
     * Get the bounding client rect of the slider track element.
     * The track is used rather than the native element to ignore the extra space that the thumb can
     * take up.
     */
    SliderRenderer.prototype.getSliderDimensions = function () {
        var trackElement = this._sliderElement.querySelector('.md-slider-track');
        return trackElement.getBoundingClientRect();
    };
    /**
     * Update the physical position of the thumb and fill track on the slider.
     */
    SliderRenderer.prototype.updateThumbAndFillPosition = function (percent, width) {
        // A container element that is used to avoid overwriting the transform on the thumb itself.
        var thumbPositionElement = this._sliderElement.querySelector('.md-slider-thumb-position');
        var fillTrackElement = this._sliderElement.querySelector('.md-slider-track-fill');
        var position = percent * width;
        fillTrackElement.style.width = position + "px";
        apply_transform_1.applyCssTransform(thumbPositionElement, "translateX(" + position + "px)");
    };
    /**
     * Focuses the native element.
     * Currently only used to allow a blur event to fire but will be used with keyboard input later.
     */
    SliderRenderer.prototype.addFocus = function () {
        this._sliderElement.focus();
    };
    return SliderRenderer;
}());
exports.SliderRenderer = SliderRenderer;
exports.MD_SLIDER_DIRECTIVES = [MdSlider];
//# sourceMappingURL=slider.js.map