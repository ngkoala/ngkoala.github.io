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
var grid_tile_1 = require('./grid-tile');
var tile_coordinator_1 = require('./tile-coordinator');
var tile_styler_1 = require('./tile-styler');
var grid_list_errors_1 = require('./grid-list-errors');
var dir_1 = require('@angular2-material/core/rtl/dir');
var line_1 = require('@angular2-material/core/line/line');
var grid_list_measure_1 = require('./grid-list-measure');
// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
var MD_FIT_MODE = 'fit';
var MdGridList = (function () {
    function MdGridList(_renderer, _element, _dir) {
        this._renderer = _renderer;
        this._element = _element;
        this._dir = _dir;
        /** The amount of space between tiles. This will be something like '5px' or '2em'. */
        this._gutter = '1px';
    }
    Object.defineProperty(MdGridList.prototype, "cols", {
        get: function () {
            return this._cols;
        },
        set: function (value) {
            this._cols = grid_list_measure_1.coerceToNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdGridList.prototype, "gutterSize", {
        get: function () {
            return this._gutter;
        },
        set: function (value) {
            this._gutter = grid_list_measure_1.coerceToString(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdGridList.prototype, "rowHeight", {
        /** Set internal representation of row height from the user-provided value. */
        set: function (value) {
            this._rowHeight = grid_list_measure_1.coerceToString(value);
            this._setTileStyler();
        },
        enumerable: true,
        configurable: true
    });
    /** TODO: internal */
    MdGridList.prototype.ngOnInit = function () {
        this._checkCols();
        this._checkRowHeight();
    };
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     * TODO: internal
     */
    MdGridList.prototype.ngAfterContentChecked = function () {
        this._layoutTiles();
    };
    /** Throw a friendly error if cols property is missing */
    MdGridList.prototype._checkCols = function () {
        if (!this.cols) {
            throw new grid_list_errors_1.MdGridListColsError();
        }
    };
    /** Default to equal width:height if rowHeight property is missing */
    MdGridList.prototype._checkRowHeight = function () {
        if (!this._rowHeight) {
            this._tileStyler = new tile_styler_1.RatioTileStyler('1:1');
        }
    };
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    MdGridList.prototype._setTileStyler = function () {
        if (this._rowHeight === MD_FIT_MODE) {
            this._tileStyler = new tile_styler_1.FitTileStyler();
        }
        else if (this._rowHeight && this._rowHeight.match(/:/g)) {
            this._tileStyler = new tile_styler_1.RatioTileStyler(this._rowHeight);
        }
        else {
            this._tileStyler = new tile_styler_1.FixedTileStyler(this._rowHeight);
        }
    };
    /** Computes and applies the size and position for all children grid tiles. */
    MdGridList.prototype._layoutTiles = function () {
        var tiles = this._tiles.toArray();
        var tracker = new tile_coordinator_1.TileCoordinator(this.cols, tiles);
        var direction = this._dir ? this._dir.value : 'ltr';
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        for (var i = 0; i < tiles.length; i++) {
            var pos = tracker.positions[i];
            var tile = tiles[i];
            this._tileStyler.setStyle(tile, pos.row, pos.col);
        }
        this._setListStyle(this._tileStyler.getComputedHeight());
    };
    /** Sets style on the main grid-list element, given the style name and value. */
    MdGridList.prototype._setListStyle = function (style) {
        if (style) {
            this._renderer.setElementStyle(this._element.nativeElement, style[0], style[1]);
        }
    };
    __decorate([
        core_1.ContentChildren(grid_tile_1.MdGridTile), 
        __metadata('design:type', core_1.QueryList)
    ], MdGridList.prototype, "_tiles", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdGridList.prototype, "cols", null);
    __decorate([
        core_1.Input('gutterSize'), 
        __metadata('design:type', Object)
    ], MdGridList.prototype, "gutterSize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], MdGridList.prototype, "rowHeight", null);
    MdGridList = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-grid-list',
            templateUrl: 'grid-list.html',
            styleUrls: ['grid-list.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef, dir_1.Dir])
    ], MdGridList);
    return MdGridList;
}());
exports.MdGridList = MdGridList;
exports.MD_GRID_LIST_DIRECTIVES = [MdGridList, grid_tile_1.MdGridTile, line_1.MdLine, grid_tile_1.MdGridTileText];
//# sourceMappingURL=grid-list.js.map