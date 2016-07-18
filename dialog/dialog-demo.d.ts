import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular2-material/dialog/dialog';
export declare class DialogDemo {
    dialog: MdDialog;
    viewContainerRef: ViewContainerRef;
    dialogRef: MdDialogRef<JazzDialog>;
    lastCloseResult: string;
    constructor(dialog: MdDialog, viewContainerRef: ViewContainerRef);
    open(): void;
}
export declare class JazzDialog {
    dialogRef: MdDialogRef<JazzDialog>;
    constructor(dialogRef: MdDialogRef<JazzDialog>);
}
