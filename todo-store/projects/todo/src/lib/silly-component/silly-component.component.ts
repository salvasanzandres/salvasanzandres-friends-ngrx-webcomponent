import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'lib-silly-component',
    templateUrl: './silly-component.component.html',
    styleUrls: ['./silly-component.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SillyComponentComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
