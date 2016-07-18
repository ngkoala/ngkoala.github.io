import { QueryList, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayOrigin, Portal } from '@angular2-material/core/core';
export declare class OverlayDemo {
    overlay: Overlay;
    viewContainerRef: ViewContainerRef;
    nextPosition: number;
    isMenuOpen: boolean;
    templatePortals: QueryList<Portal<any>>;
    _overlayOrigin: OverlayOrigin;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef);
    openRotiniPanel(): void;
    openFusilliPanel(): void;
    openSpaghettiPanel(): void;
}
