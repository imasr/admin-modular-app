import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    constructor(private http: HttpClient) { }
    // localValue: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    localValue = new Subject();


    set setItem(value) {
        this.localValue.next(value);
        localStorage.setItem('user', value);
    }

    get getItem() {
        return localStorage.getItem('user');
    }
}

