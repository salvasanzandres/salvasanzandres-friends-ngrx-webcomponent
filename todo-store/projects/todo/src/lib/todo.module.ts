import {NgModule} from '@angular/core';

import {SillyComponentComponent} from './silly-component/silly-component.component';



@NgModule({
    declarations: [SillyComponentComponent],
    exports: [SillyComponentComponent],
    imports: []
})
export class TodoModule {
}
