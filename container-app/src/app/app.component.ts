import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

import {TodoService} from 'todo';
import {Friend} from './core/models/friend';
import {FriendsService} from './core/store/friends.service';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
    friends: Observable<Friend[]>;
    friendForm: FormGroup;


    constructor(private todoService: TodoService,
                private friendsService: FriendsService) {
        this.friends = this.friendsService.friends;
        window.store = this.friendsService;

    }

    ngOnInit() {
        this.friendForm = new FormGroup({
            name: new FormControl('', Validators.required)
        });
    }

    AddFriend() {
        const friend = new Friend(this.friendForm.get('name').value);
        this.friendsService.addFriend(friend);

    }

    removeFriend(friendIndex: number) {
        this.friendsService.removeFriend(friendIndex);
    }
}
