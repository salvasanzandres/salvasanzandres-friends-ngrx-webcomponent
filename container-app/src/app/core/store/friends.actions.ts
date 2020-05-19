import {Action} from '@ngrx/store';

export enum FriendActionTypes {
    Add = '[Friend Component] Add',
    Remove = '[Friend Component] Remove'
}

export class ActionEx implements Action {
    readonly type;
    payload: any;
}

export class FriendAdd implements ActionEx {
    readonly type = FriendActionTypes.Add;

    constructor(public payload: any) {
    }
}

export class FriendRemove implements ActionEx {
    readonly type = FriendActionTypes.Remove;

    constructor(public payload: any) {
    }
}
