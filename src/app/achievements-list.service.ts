import {Injectable} from '@angular/core';
import {content} from './achievements-content';

@Injectable({
    providedIn: 'root'
})
export class AchievementsListService {

    data = content;

    constructor() {
    }

    getAchievementsList() {
        return this.data;
    }
}
