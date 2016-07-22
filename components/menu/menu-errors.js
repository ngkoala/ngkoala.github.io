"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var error_1 = require('@angular2-material/core/errors/error');
/**
 * Exception thrown when menu trigger doesn't have a valid md-menu instance
 */
var MdMenuMissingError = (function (_super) {
    __extends(MdMenuMissingError, _super);
    function MdMenuMissingError() {
        _super.call(this, "md-menu-trigger: must pass in an md-menu instance.\n\n    Example:\n      <md-menu #menu=\"mdMenu\"></md-menu>\n      <button [md-menu-trigger-for]=\"menu\"></button>\n    ");
    }
    return MdMenuMissingError;
}(error_1.MdError));
exports.MdMenuMissingError = MdMenuMissingError;
//# sourceMappingURL=menu-errors.js.map