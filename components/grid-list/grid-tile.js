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
var line_1 = require('@angular2-material/core/line/line');
var grid_list_measure_1 = require('./grid-list-measure');
var MdGridTile = (function () {
    function MdGridTile(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._rowspan = 1;
        this._colspan = 1;
    }
    Object.defineProperty(MdGridTile.prototype, "rowspan", {
        get: function () {
            return this._rowspan;
        },
        set: function (value) {
            this._rowspan = grid_list_measure_1.coerceToNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdGridTile.prototype, "colspan", {
        get: function () {
            return this._colspan;
        },
        set: function (value) {
            this._colspan = grid_list_measure_1.coerceToNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    MdGridTile.prototype._setStyle = function (property, value) {
        this._renderer.setElementStyle(this._element.nativeElement, property, value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdGridTile.prototype, "rowspan", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdGridTile.prototype, "colspan", null);
    MdGridTile = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-grid-tile',
            host: { 'role': 'listitem' },
            templateUrl: 'grid-tile.html',
            styleUrls: ['grid-list.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], MdGridTile);
    return MdGridTile;
}());
exports.MdGridTile = MdGridTile;
var MdGridTileText = (function () {
    function MdGridTileText(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    MdGridTileText.prototype.ngAfterContentInit = function () {
        this._lineSetter = new line_1.MdLineSetter(this._lines, this._renderer, this._element);
    };
    __decorate([
        core_1.ContentChildren(line_1.MdLine), 
        __metadata('design:type', core_1.QueryList)
    ], MdGridTileText.prototype, "_lines", void 0);
    MdGridTileText = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-grid-tile-header, md-grid-tile-footer',
            templateUrl: 'grid-tile-text.html'
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], MdGridTileText);
    return MdGridTileText;
}());
exports.MdGridTileText = MdGridTileText;
//# sourceMappingURL=grid-tile.js.map