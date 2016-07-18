import { Observable } from 'rxjs/Observable';
export declare class TabsDemo {
    tabs: {
        label: string;
        content: string;
    }[];
    asyncTabs: Observable<any>;
    constructor();
}
