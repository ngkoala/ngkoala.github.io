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
var MdList = (function () {
    function MdList() {
    }
    MdList = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-list, md-nav-list',
            host: { 'role': 'list' },
            template: '<ng-content></ng-content>',
            styleUrls: ['list.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], MdList);
    return MdList;
}());
exports.MdList = MdList;
/* Need directive for a ContentChild query in list-item */
var MdListAvatar = (function () {
    function MdListAvatar() {
    }
    MdListAvatar = __decorate([
        core_1.Directive({ selector: '[md-list-avatar]' }), 
        __metadata('design:paramtypes', [])
    ], MdListAvatar);
    return MdListAvatar;
}());
exports.MdListAvatar = MdListAvatar;
var MdListItem = (function () {
    function MdListItem(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._hasFocus = false;
    }
    Object.defineProperty(MdListItem.prototype, "_hasAvatar", {
        set: function (avatar) {
            this._renderer.setElementClass(this._element.nativeElement, 'md-list-avatar', avatar != null);
        },
        enumerable: true,
        configurable: true
    });
    /** TODO: internal */
    MdListItem.prototype.ngAfterContentInit = function () {
        this._lineSetter = new line_1.MdLineSetter(this._lines, this._renderer, this._element);
    };
    MdListItem.prototype._handleFocus = function () {
        this._hasFocus = true;
    };
    MdListItem.prototype._handleBlur = function () {
        this._hasFocus = false;
    };
    __decorate([
        core_1.ContentChildren(line_1.MdLine), 
        __metadata('design:type', core_1.QueryList)
    ], MdListItem.prototype, "_lines", void 0);
    __decorate([
        core_1.ContentChild(MdListAvatar), 
        __metadata('design:type', MdListAvatar), 
        __metadata('design:paramtypes', [MdListAvatar])
    ], MdListItem.prototype, "_hasAvatar", null);
    MdListItem = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-list-item, a[md-list-item]',
            host: {
                'role': 'listitem',
                '(focus)': '_handleFocus()',
                '(blur)': '_handleBlur()',
            },
            templateUrl: 'list-item.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], MdListItem);
    return MdListItem;
}());
exports.MdListItem = MdListItem;
exports.MD_LIST_DIRECTIVES = [MdList, MdListItem, line_1.MdLine, MdListAvatar];
//# sourceMappingURL=list.js.map