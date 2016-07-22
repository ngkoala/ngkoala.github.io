export declare class MenuDemo {
    selected: string;
    items: ({
        text: string;
    } | {
        text: string;
        disabled: boolean;
    })[];
    select(text: string): void;
}
