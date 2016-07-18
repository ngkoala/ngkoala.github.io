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
var forms_1 = require('@angular/forms');
var Observable_1 = require('rxjs/Observable');
var unique_selection_dispatcher_1 = require('@angular2-material/core/coordination/unique-selection-dispatcher');
var field_value_1 = require('@angular2-material/core/annotations/field-value');
/**
 * Provider Expression that allows md-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 */
exports.MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MdButtonToggleGroup; }),
    multi: true
};
var _uniqueIdCounter = 0;
/** A simple change event emitted by either MdButtonToggle or MdButtonToggleGroup. */
var MdButtonToggleChange = (function () {
    function MdButtonToggleChange() {
    }
    return MdButtonToggleChange;
}());
exports.MdButtonToggleChange = MdButtonToggleChange;
/** Exclusive selection button toggle group that behaves like a radio-button group. */
var MdButtonToggleGroup = (function () {
    function MdButtonToggleGroup() {
        /** The value for the button toggle group. Should match currently selected button toggle. */
        this._value = null;
        /** The HTML name attribute applied to toggles in this group. */
        this._name = "md-radio-group-" + _uniqueIdCounter++;
        /** Disables all toggles in the group. */
        this._disabled = null;
        /** The currently selected button toggle, should match the value. */
        this._selected = null;
        /** The method to be called in order to update ngModel. */
        this._controlValueAccessorChangeFn = function (value) { };
        /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
        this.onTouched = function () { };
        /** Event emitted when the group's value changes. */
        this._change = new core_1.EventEmitter();
        /** Child button toggle buttons. */
        this._buttonToggles = null;
    }
    Object.defineProperty(MdButtonToggleGroup.prototype, "change", {
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggleGroup.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            this._updateButtonToggleNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggleGroup.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggleGroup.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            if (this._value != newValue) {
                this._value = newValue;
                this._updateSelectedButtonToggleFromValue();
                this._emitChangeEvent();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggleGroup.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            if (selected && !selected.checked) {
                selected.checked = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    MdButtonToggleGroup.prototype._updateButtonToggleNames = function () {
        var _this = this;
        (this._buttonToggles || []).forEach(function (toggle) {
            toggle.name = _this._name;
        });
    };
    // TODO: Refactor into shared code with radio.
    MdButtonToggleGroup.prototype._updateSelectedButtonToggleFromValue = function () {
        var _this = this;
        var isAlreadySelected = this._selected != null && this._selected.value == this._value;
        if (this._buttonToggles != null && !isAlreadySelected) {
            var matchingButtonToggle = this._buttonToggles.filter(function (buttonToggle) { return buttonToggle.value == _this._value; })[0];
            if (matchingButtonToggle) {
                this.selected = matchingButtonToggle;
            }
            else if (this.value == null) {
                this.selected = null;
                this._buttonToggles.forEach(function (buttonToggle) {
                    buttonToggle.checked = false;
                });
            }
        }
    };
    /** Dispatch change event with current selection and group value. */
    MdButtonToggleGroup.prototype._emitChangeEvent = function () {
        var event = new MdButtonToggleChange();
        event.source = this._selected;
        event.value = this._value;
        this._controlValueAccessorChangeFn(event.value);
        this._change.emit(event);
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdButtonToggleGroup.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdButtonToggleGroup.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdButtonToggleGroup.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Observable_1.Observable)
    ], MdButtonToggleGroup.prototype, "change", null);
    __decorate([
        core_1.ContentChildren(core_1.forwardRef(function () { return MdButtonToggle; })), 
        __metadata('design:type', core_1.QueryList)
    ], MdButtonToggleGroup.prototype, "_buttonToggles", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdButtonToggleGroup.prototype, "name", null);
    __decorate([
        core_1.Input(),
        field_value_1.BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdButtonToggleGroup.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdButtonToggleGroup.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdButtonToggleGroup.prototype, "selected", null);
    MdButtonToggleGroup = __decorate([
        core_1.Directive({
            selector: 'md-button-toggle-group:not([multiple])',
            providers: [exports.MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR],
            host: {
                'role': 'radiogroup',
            },
        }), 
        __metadata('design:paramtypes', [])
    ], MdButtonToggleGroup);
    return MdButtonToggleGroup;
}());
exports.MdButtonToggleGroup = MdButtonToggleGroup;
/** Multiple selection button-toggle group. */
var MdButtonToggleGroupMultiple = (function () {
    function MdButtonToggleGroupMultiple() {
        /** Disables all toggles in the group. */
        this._disabled = null;
    }
    Object.defineProperty(MdButtonToggleGroupMultiple.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdButtonToggleGroupMultiple.prototype, "disabled", null);
    MdButtonToggleGroupMultiple = __decorate([
        core_1.Directive({
            selector: 'md-button-toggle-group[multiple]',
        }), 
        __metadata('design:paramtypes', [])
    ], MdButtonToggleGroupMultiple);
    return MdButtonToggleGroupMultiple;
}());
exports.MdButtonToggleGroupMultiple = MdButtonToggleGroupMultiple;
var MdButtonToggle = (function () {
    function MdButtonToggle(toggleGroup, toggleGroupMultiple, buttonToggleDispatcher) {
        var _this = this;
        this.buttonToggleDispatcher = buttonToggleDispatcher;
        /** Whether or not this button toggle is checked. */
        this._checked = false;
        /** Whether or not this button toggle is disabled. */
        this._disabled = null;
        /** Value assigned to this button toggle. */
        this._value = null;
        /** Whether or not the button toggle is a single selection. */
        this._isSingleSelector = null;
        /** Event emitted when the group value changes. */
        this._change = new core_1.EventEmitter();
        this.buttonToggleGroup = toggleGroup;
        this.buttonToggleGroupMultiple = toggleGroupMultiple;
        if (this.buttonToggleGroup) {
            buttonToggleDispatcher.listen(function (id, name) {
                if (id != _this.id && name == _this.name) {
                    _this.checked = false;
                }
            });
            this._type = 'radio';
            this.name = this.buttonToggleGroup.name;
            this._isSingleSelector = true;
        }
        else {
            // Even if there is no group at all, treat the button toggle as a checkbox so it can be
            // toggled on or off.
            this._type = 'checkbox';
            this._isSingleSelector = false;
        }
    }
    Object.defineProperty(MdButtonToggle.prototype, "change", {
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    MdButtonToggle.prototype.ngOnInit = function () {
        if (this.id == null) {
            this.id = "md-button-toggle-" + _uniqueIdCounter++;
        }
        if (this.buttonToggleGroup && this._value == this.buttonToggleGroup.value) {
            this._checked = true;
        }
    };
    Object.defineProperty(MdButtonToggle.prototype, "inputId", {
        get: function () {
            return this.id + "-input";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggle.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (newCheckedState) {
            if (this._isSingleSelector) {
                if (newCheckedState) {
                    // Notify all button toggles with the same name (in the same group) to un-check.
                    this.buttonToggleDispatcher.notify(this.id, this.name);
                }
                if (newCheckedState != this._checked) {
                    this._emitChangeEvent();
                }
            }
            this._checked = newCheckedState;
            if (newCheckedState && this._isSingleSelector && this.buttonToggleGroup.value != this.value) {
                this.buttonToggleGroup.selected = this;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggle.prototype, "value", {
        /** MdButtonToggleGroup reads this to assign its own value. */
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._value != value) {
                if (this.buttonToggleGroup != null && this.checked) {
                    this.buttonToggleGroup.value = value;
                }
                this._value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Dispatch change event with current value. */
    MdButtonToggle.prototype._emitChangeEvent = function () {
        var event = new MdButtonToggleChange();
        event.source = this;
        event.value = this._value;
        this._change.emit(event);
    };
    Object.defineProperty(MdButtonToggle.prototype, "disabled", {
        get: function () {
            return this._disabled || (this.buttonToggleGroup != null && this.buttonToggleGroup.disabled) ||
                (this.buttonToggleGroupMultiple != null && this.buttonToggleGroupMultiple.disabled);
        },
        set: function (value) {
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Toggle the state of the current button toggle. */
    MdButtonToggle.prototype._toggle = function () {
        this.checked = !this.checked;
    };
    /** Checks the button toggle due to an interaction with the underlying native input. */
    MdButtonToggle.prototype._onInputChange = function (event) {
        event.stopPropagation();
        if (this._isSingleSelector) {
            // Propagate the change one-way via the group, which will in turn mark this
            // button toggle as checked.
            this.checked = true;
            this.buttonToggleGroup.selected = this;
            this.buttonToggleGroup.onTouched();
        }
        else {
            this._toggle();
        }
    };
    __decorate([
        core_1.HostBinding(),
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdButtonToggle.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdButtonToggle.prototype, "name", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Observable_1.Observable)
    ], MdButtonToggle.prototype, "change", null);
    __decorate([
        core_1.HostBinding('class.md-button-toggle-checked'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdButtonToggle.prototype, "checked", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdButtonToggle.prototype, "value", null);
    __decorate([
        core_1.HostBinding('class.md-button-toggle-disabled'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdButtonToggle.prototype, "disabled", null);
    MdButtonToggle = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-button-toggle',
            templateUrl: 'button-toggle.html',
            styleUrls: ['button-toggle.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __param(0, core_1.Optional()),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [MdButtonToggleGroup, MdButtonToggleGroupMultiple, unique_selection_dispatcher_1.MdUniqueSelectionDispatcher])
    ], MdButtonToggle);
    return MdButtonToggle;
}());
exports.MdButtonToggle = MdButtonToggle;
exports.MD_BUTTON_TOGGLE_DIRECTIVES = [
    MdButtonToggleGroup,
    MdButtonToggleGroupMultiple,
    MdButtonToggle
];
//# sourceMappingURL=button-toggle.js.map