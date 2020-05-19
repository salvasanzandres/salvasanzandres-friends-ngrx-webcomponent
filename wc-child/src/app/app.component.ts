import {Component, ChangeDetectorRef, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {TodoService} from 'todo';
import {Friend} from './core/models/friend';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
    store;
    friendData: Friend[];
    friendForm: FormGroup;

    constructor(private todoService: TodoService,
                private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.store = window.store;
        this.friendForm = new FormGroup({
            name: new FormControl('', Validators.required)
        });

        this.store.friends.subscribe(data => {
            this.friendData = data
            this.changeDetectorRef.detectChanges();
        });
    }

    removeFriend(friendIndex: number) {
        this.store.removeFriend(friendIndex);
    }

    AddFriend() {
        const friend = new Friend(this.friendForm.get('name').value);
        this.store.addFriend(friend);
    }




}
