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
var dialog_1 = require('@angular2-material/dialog/dialog');
var overlay_1 = require('@angular2-material/core/overlay/overlay');
var DialogDemo = (function () {
    function DialogDemo(dialog, viewContainerRef) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
    }
    DialogDemo.prototype.open = function () {
        var _this = this;
        var config = new dialog_1.MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;
        this.dialog.open(JazzDialog, config).then(function (ref) {
            _this.dialogRef = ref;
            _this.dialogRef.afterClosed().subscribe(function (result) {
                _this.lastCloseResult = result;
                _this.dialogRef = null;
            });
        });
    };
    DialogDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-demo',
            templateUrl: 'dialog-demo.html',
            styleUrls: ['dialog-demo.css'],
            providers: [dialog_1.MdDialog, overlay_1.OVERLAY_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [dialog_1.MdDialog, core_1.ViewContainerRef])
    ], DialogDemo);
    return DialogDemo;
}());
exports.DialogDemo = DialogDemo;
var JazzDialog = (function () {
    function JazzDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    JazzDialog = __decorate([
        core_1.Component({
            selector: 'demo-jazz-dialog',
            template: "\n  <p>It's Jazz!</p>\n  <p><label>How much? <input #howMuch></label></p>\n  <button type=\"button\" (click)=\"dialogRef.close(howMuch.value)\">Close dialog</button>"
        }), 
        __metadata('design:paramtypes', [dialog_1.MdDialogRef])
    ], JazzDialog);
    return JazzDialog;
}());
exports.JazzDialog = JazzDialog;
//# sourceMappingURL=dialog-demo.js.map