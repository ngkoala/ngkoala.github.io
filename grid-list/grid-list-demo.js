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
var forms_1 = require('@angular/forms');
var grid_list_1 = require('@angular2-material/grid-list/grid-list');
var button_1 = require('@angular2-material/button/button');
var card_1 = require('@angular2-material/card/card');
var icon_1 = require('@angular2-material/icon/icon');
var GridListDemo = (function () {
    function GridListDemo() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.dogs = [
            { name: 'Porter', human: 'Kara' },
            { name: 'Mal', human: 'Jeremy' },
            { name: 'Koby', human: 'Igor' },
            { name: 'Razzle', human: 'Ward' },
            { name: 'Molly', human: 'Rob' },
            { name: 'Husi', human: 'Matias' },
        ];
        this.fixedCols = 4;
        this.fixedRowHeight = 100;
        this.ratioGutter = 1;
        this.fitListHeight = '400px';
        this.ratio = '4:1';
    }
    GridListDemo.prototype.addTileCols = function () { this.tiles[2].cols++; };
    GridListDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grid-list-demo',
            templateUrl: 'grid-list-demo.html',
            styleUrls: ['grid-list-demo.css'],
            directives: [
                grid_list_1.MD_GRID_LIST_DIRECTIVES,
                button_1.MdButton,
                card_1.MD_CARD_DIRECTIVES,
                icon_1.MdIcon,
                forms_1.FORM_DIRECTIVES,
                common_1.NgFor,
            ],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], GridListDemo);
    return GridListDemo;
}());
exports.GridListDemo = GridListDemo;
//# sourceMappingURL=grid-list-demo.js.map