import {ActionEx, FriendActionTypes} from './friends.actions';

export const initialState = [];
export function FriendsReducer(state = initialState, action: ActionEx) {
    switch (action.type) {
        case FriendActionTypes.Add:
            return [...state, action.payload];
        case FriendActionTypes.Remove:
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];
        default:
            return state;
    }
}
