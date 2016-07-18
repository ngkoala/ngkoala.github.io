import { QueryList } from '@angular/core';
import { Portal, ComponentPortal } from '@angular2-material/core/core';
export declare class PortalDemo {
    templatePortals: QueryList<Portal<any>>;
    selectedPortal: Portal<any>;
    programmingJoke: Portal<any>;
    mathJoke: Portal<any>;
    scienceJoke: ComponentPortal<ScienceJoke>;
}
export declare class ScienceJoke {
}
