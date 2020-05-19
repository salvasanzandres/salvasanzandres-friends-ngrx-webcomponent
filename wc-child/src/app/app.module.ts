import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {createCustomElement} from '@angular/elements';

import {AppComponent} from './app.component';
import {TodoModule} from 'todo';





@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        TodoModule
    ],
    providers: [],
    entryComponents: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
        const myElement = createCustomElement(AppComponent, {injector});
        customElements.define('wc-child', myElement);
    }

    ngDoBootstrap() {
    }
}

