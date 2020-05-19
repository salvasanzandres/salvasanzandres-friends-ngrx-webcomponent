import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {TodoService} from '../../../todo/src/lib/todo.service';
import {Friend} from '../../../todo/src/lib/core/models/friend';
import {FriendAdd, FriendRemove} from '../../../todo/src/lib/core/ngrx/friends.actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'todo-showcase';
    titi;
    friends: Observable<Friend[]>;
    friendForm: FormGroup;

    constructor(private todoService: TodoService,
                private store: Store<{ friends: Friend[] }>) {
        this.titi = this.todoService.toto;
        this.friends = store.pipe(select('friends'));
    }

    AddFriend() {
        const friend = new Friend(this.friendForm.get('name').value, this.friendForm.get('age').value);
        this.store.dispatch(new FriendAdd(friend));
    }

    removeFriend(friendIndex: number) {
        this.store.dispatch(new FriendRemove(friendIndex));
    }

    ngOnInit() {
        this.friendForm = new FormGroup({
            name: new FormControl('', Validators.required),
            age: new FormControl('', Validators.required)
        });
    }
}
