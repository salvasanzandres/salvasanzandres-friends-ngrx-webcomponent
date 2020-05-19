import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {Friend} from '../models/friend';
import {FriendAdd, FriendRemove} from './friends.actions';


@Injectable({
    providedIn: 'root'
})
export class FriendsService implements FriendsServiceInterface {
    friends: Observable<Friend[]>

    constructor(private store: Store<{ friends: Friend[] }>) {
        this.friends = this.store.pipe(select('friends'));
    }

    addFriend(friend: Friend) {
        this.store.dispatch(new FriendAdd(friend));
    }
    removeFriend(friendIndex: number) {
        this.store.dispatch(new FriendRemove(friendIndex));
    }
}

export interface FriendsServiceInterface {
    friends: Observable<Friend[]>;
    addFriend(friend: Friend);
    removeFriend(friendIndex: number);
}
