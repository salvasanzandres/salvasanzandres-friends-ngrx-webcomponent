import {Observable} from 'rxjs';

import {Friend} from '../models/friend';


export interface FriendsServiceInterface {
    friends: Observable<Friend[]>;
    addFriend(friend: Friend);
    removeFriend(friendIndex: number);
}
