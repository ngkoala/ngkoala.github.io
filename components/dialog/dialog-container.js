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
var portal_1 = require('@angular2-material/core/portal/portal');
var portal_directives_1 = require('@angular2-material/core/portal/portal-directives');
var promise_completer_1 = require('@angular2-material/core/async/promise-completer');
var dialog_errors_1 = require('./dialog-errors');
/**
 * Internal component that wraps user-provided dialog content.
 */
var MdDialogContainer = (function (_super) {
    __extends(MdDialogContainer, _super);
    function MdDialogContainer() {
        _super.apply(this, arguments);
    }
    /** TODO: internal */
    MdDialogContainer.prototype.ngAfterViewInit = function () {
        var _this = this;
        // If there was an attempted call to `attachComponentPortal` before this lifecycle stage,
        // we actually perform the attachment now that the `@ViewChild` is resolved.
        if (this._deferredAttachCompleter) {
            this.attachComponentPortal(this._deferredAttachPortal).then(function (componentRef) {
                _this._deferredAttachCompleter.resolve(componentRef);
                _this._deferredAttachPortal = null;
                _this._deferredAttachCompleter = null;
            }, function () {
                _this._deferredAttachCompleter.reject();
                _this._deferredAttachCompleter = null;
                _this._deferredAttachPortal = null;
            });
        }
    };
    /** Attach a portal as content to this dialog container. */
    MdDialogContainer.prototype.attachComponentPortal = function (portal) {
        if (this._portalHost) {
            if (this._portalHost.hasAttached()) {
                throw new dialog_errors_1.MdDialogContentAlreadyAttachedError();
            }
            return this._portalHost.attachComponentPortal(portal);
        }
        else {
            // The @ViewChild query for the portalHost is not resolved until AfterViewInit, but this
            // function may be called before this lifecycle event. As such, we defer the attachment of
            // the portal until AfterViewInit.
            if (this._deferredAttachCompleter) {
                throw new dialog_errors_1.MdDialogContentAlreadyAttachedError();
            }
            this._deferredAttachPortal = portal;
            this._deferredAttachCompleter = new promise_completer_1.PromiseCompleter();
            return this._deferredAttachCompleter.promise;
        }
    };
    MdDialogContainer.prototype.attachTemplatePortal = function (portal) {
        throw Error('Not yet implemented');
    };
    __decorate([
        core_1.ViewChild(portal_directives_1.PortalHostDirective), 
        __metadata('design:type', portal_directives_1.PortalHostDirective)
    ], MdDialogContainer.prototype, "_portalHost", void 0);
    MdDialogContainer = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-dialog-container',
            templateUrl: 'dialog-container.html',
            styleUrls: ['dialog-container.css'],
            directives: [portal_directives_1.PortalHostDirective],
            host: {
                'class': 'md-dialog-container',
                '[attr.role]': 'dialogConfig?.role'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdDialogContainer);
    return MdDialogContainer;
}(portal_1.BasePortalHost));
exports.MdDialogContainer = MdDialogContainer;
//# sourceMappingURL=dialog-container.js.map