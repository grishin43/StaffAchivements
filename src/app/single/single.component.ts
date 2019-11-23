import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AchievementsListService} from '../achievements-list.service';

@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit, OnDestroy {
    id: number;
    achieve: any;
    private sub: any;

    constructor(private route: ActivatedRoute, private content: AchievementsListService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        const achievementsList = this.content.getAchievementsList();
        for (const item in achievementsList) {
            if (+achievementsList[item].id === +this.id) {
                this.achieve = achievementsList[item];
            }
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
