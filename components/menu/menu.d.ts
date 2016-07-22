import { TemplateRef, EventEmitter } from '@angular/core';
export declare class MdMenu {
    private _showClickCatcher;
    close: EventEmitter<{}>;
    templateRef: TemplateRef<any>;
    /**
     * This function toggles the display of the menu's click catcher element.
     * This element covers the viewport when the menu is open to detect clicks outside the menu.
     * TODO: internal
     */
    _setClickCatcher(bool: boolean): void;
    private _emitCloseEvent();
}
