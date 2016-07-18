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
/*

<md-card> is a basic content container component that adds the styles of a material design card.

While you can use this component alone,
it also provides a number of preset styles for common card sections, including:
 - md-card-title
 - md-card-subtitle
 - md-card-content
 - md-card-actions
 - md-card-footer

 You can see some examples of cards here:
 http://embed.plnkr.co/s5O4YcyvbLhIApSrIhtj/

 TODO(kara): update link to demo site when it exists

*/
var MdCard = (function () {
    function MdCard() {
    }
    MdCard = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-card',
            templateUrl: 'card.html',
            styleUrls: ['card.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], MdCard);
    return MdCard;
}());
exports.MdCard = MdCard;
/*  The following components don't have any behavior.
 They simply use content projection to wrap user content
 for flex layout purposes in <md-card> (and thus allow a cleaner, boilerplate-free API).


<md-card-header> is a component intended to be used within the <md-card> component.
It adds styles for a preset header section (i.e. a title, subtitle, and avatar layout).

You can see an example of a card with a header here:
http://embed.plnkr.co/tvJl19z3gZTQd6WmwkIa/

TODO(kara): update link to demo site when it exists
*/
var MdCardHeader = (function () {
    function MdCardHeader() {
    }
    MdCardHeader = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-card-header',
            templateUrl: 'card-header.html',
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], MdCardHeader);
    return MdCardHeader;
}());
exports.MdCardHeader = MdCardHeader;
/*

<md-card-title-group> is a component intended to be used within the <md-card> component.
It adds styles for a preset layout that groups an image with a title section.

You can see an example of a card with a title-group section here:
http://embed.plnkr.co/EDfgCF9eKcXjini1WODm/

TODO(kara): update link to demo site when it exists
*/
var MdCardTitleGroup = (function () {
    function MdCardTitleGroup() {
    }
    MdCardTitleGroup = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-card-title-group',
            templateUrl: 'card-title-group.html',
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], MdCardTitleGroup);
    return MdCardTitleGroup;
}());
exports.MdCardTitleGroup = MdCardTitleGroup;
exports.MD_CARD_DIRECTIVES = [MdCard, MdCardHeader, MdCardTitleGroup];
//# sourceMappingURL=card.js.map