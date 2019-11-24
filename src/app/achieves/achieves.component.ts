import {Component, OnInit} from '@angular/core';
import {AchievementsListService} from '../achievements-list.service';
import {HttpService} from '../http.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
    selector: 'app-achieves',
    templateUrl: './achieves.component.html',
    styleUrls: ['./achieves.component.css']
})
export class AchievesComponent implements OnInit {

    achievementSaveForm: FormGroup;
    achievementsArray: any;
    selectedAchieve: any;
    selectedAchieveIndex: number;
    achievements: any;
    target_value: any;
    points: any;
    condition: any;
    condition_title: any;

    constructor(
        private achievementsContent: AchievementsListService,
        private httpService: HttpService) {
        this.achievementSaveForm = new FormGroup({
            'target_value': new FormControl(this.target_value, [
                Validators.required
            ]),
            'points': new FormControl(this.points, [
                Validators.required,
            ]),
            'condition': new FormControl(this.condition, [
                Validators.required
            ]),
            'condition_title': new FormControl(this.condition_title, [
                Validators.required,
            ])
        });
    }

    ngOnInit() {
        this.achievementsArray = this.achievementsContent.getAchievementsList();
        this.httpService.getAchievements((data) => {
            this.achievements = data.data;
            console.log(data);
        }, (data) => {
            console.log(data);
        });
    }

    setSelectedAchieve(achieveObj, achieveIndex) {
        this.selectedAchieve = achieveObj;
        this.selectedAchieveIndex = achieveIndex;
    }

    sendData(formData: NgForm) {
        for (const item in formData) {
            if (!formData[item]) {
                formData[item] = this.selectedAchieve[item];
            }
        }
        this.httpService.updateAchievement(this.selectedAchieve.achievement_id, formData, (response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
}
