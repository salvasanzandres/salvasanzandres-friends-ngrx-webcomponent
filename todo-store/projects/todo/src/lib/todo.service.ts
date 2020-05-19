import {Injectable} from '@angular/core';



@Injectable({
    providedIn: 'root'
})
export class TodoService {
    toto = 6;

    constructor() {
        console.log('lib constructor class');
    }
}
