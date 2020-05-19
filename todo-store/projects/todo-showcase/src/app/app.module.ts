import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {FriendsReducer} from '../../../todo/src/lib/core/ngrx/friends.reducer';




@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        StoreModule.forRoot({friends: FriendsReducer})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
