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
var core_2 = require('@angular2-material/core/core');
var OverlayDemo = (function () {
    function OverlayDemo(overlay, viewContainerRef) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nextPosition = 0;
        this.isMenuOpen = false;
    }
    OverlayDemo.prototype.openRotiniPanel = function () {
        var _this = this;
        var config = new core_2.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .left(this.nextPosition + "px")
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        this.overlay.create(config).then(function (ref) {
            ref.attach(new core_2.ComponentPortal(RotiniPanel, _this.viewContainerRef));
        });
    };
    OverlayDemo.prototype.openFusilliPanel = function () {
        var _this = this;
        var config = new core_2.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        this.overlay.create(config).then(function (ref) {
            ref.attach(_this.templatePortals.first);
        });
    };
    OverlayDemo.prototype.openSpaghettiPanel = function () {
        var _this = this;
        // TODO(jelbourn): separate overlay demo for connected positioning.
        var strategy = this.overlay.position()
            .connectedTo(this._overlayOrigin.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
        var config = new core_2.OverlayState();
        config.positionStrategy = strategy;
        this.overlay.create(config).then(function (ref) {
            ref.attach(new core_2.ComponentPortal(SpagettiPanel, _this.viewContainerRef));
        });
    };
    __decorate([
        core_1.ViewChildren(core_2.TemplatePortalDirective), 
        __metadata('design:type', core_1.QueryList)
    ], OverlayDemo.prototype, "templatePortals", void 0);
    __decorate([
        core_1.ViewChild(core_2.OverlayOrigin), 
        __metadata('design:type', core_2.OverlayOrigin)
    ], OverlayDemo.prototype, "_overlayOrigin", void 0);
    OverlayDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'overlay-demo',
            templateUrl: 'overlay-demo.html',
            styleUrls: ['overlay-demo.css'],
            directives: [core_2.PORTAL_DIRECTIVES, core_2.OVERLAY_DIRECTIVES, common_1.NgIf],
            providers: [core_2.OVERLAY_PROVIDERS],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [core_2.Overlay, core_1.ViewContainerRef])
    ], OverlayDemo);
    return OverlayDemo;
}());
exports.OverlayDemo = OverlayDemo;
/** Simple component to load into an overlay */
var RotiniPanel = (function () {
    function RotiniPanel() {
        this.value = 9000;
    }
    RotiniPanel = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rotini-panel',
            template: '<p class="demo-rotini">Rotini {{value}}</p>'
        }), 
        __metadata('design:paramtypes', [])
    ], RotiniPanel);
    return RotiniPanel;
}());
/** Simple component to load into an overlay */
var SpagettiPanel = (function () {
    function SpagettiPanel() {
        this.value = 'Omega';
    }
    SpagettiPanel = __decorate([
        core_1.Component({
            selector: 'spagetti-panel',
            template: '<div class="demo-spagetti">Spagetti {{value}}</div>'
        }), 
        __metadata('design:paramtypes', [])
    ], SpagettiPanel);
    return SpagettiPanel;
}());
//# sourceMappingURL=overlay-demo.js.map