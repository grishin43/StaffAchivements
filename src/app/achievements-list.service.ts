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

    getProgressColor(percentage) {
        let color;
        if (typeof percentage === 'string') {
            percentage = percentage.match(/\d+/g).join('');
        }
        if (percentage < 30) {
            color = '#ff1212';
        } else if (percentage < 50) {
            color = '#FFA81E';
        } else if (percentage <= 100) {
            color = '#118B4B';
        } else {
            color = '#726692';
        }
        return color;
    }
}
