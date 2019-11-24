import {Component, OnInit} from '@angular/core';
import {AchievementsListService} from '../achievements-list.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    achievements: any;
    unlockedAchievesCount = 0;
    totalAchievesPoints = 0;
    currentAchievesPoints = 0;
    mainProgress = 0;

    constructor(private content: AchievementsListService) {
    }

    setAllCounters(achievementsArray) {
        achievementsArray.forEach((item) => {
            if (item.unlocked) {
                this.unlockedAchievesCount++;
            }
            if (item.points) {
                this.totalAchievesPoints += +item.points;
            }
            if (item.unlocked && item.points) {
                this.currentAchievesPoints += +item.points;
            }
        });
    }

    getPercent(value, summary) {
        return value * 100 / summary;
    }

    ngOnInit() {
        this.achievements = this.content.getAchievementsList();
        this.setAllCounters(this.achievements);
        this.mainProgress = this.getPercent(this.currentAchievesPoints, this.totalAchievesPoints);
    }

}
