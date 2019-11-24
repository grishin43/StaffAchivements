import {Injectable} from '@angular/core';
import {content} from './users-content';

@Injectable({
    providedIn: 'root'
})
export class UsersListService {

    data = content;

    constructor() {
    }

    getUsersList() {
        return this.data;
    }
}
