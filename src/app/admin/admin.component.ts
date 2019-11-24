import {Component, OnInit} from '@angular/core';
import {AchievementsListService} from '../achievements-list.service';
import {UsersListService} from '../users-list.service';
import {HttpService} from '../http.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    usersList: any;
    achievementsList: any;
    selectedUser: any;
    selectedUserIndex: number;
    users: any;

    constructor(
        private userContent: UsersListService,
        private achievementsContent: AchievementsListService,
        private httpService: HttpService) {
    }

    ngOnInit() {
        this.usersList = this.userContent.getUsersList();
        this.achievementsList = this.achievementsContent.getAchievementsList();
        this.httpService.getUsers((data) => {
            this.users = data.data;
            console.log(data);
        }, (error) => {
            console.log(error);
        });
    }

    setSelectedUser(userObj, userIndex) {
        this.selectedUser = userObj;
        this.selectedUserIndex = userIndex;
    }

    updateUserAchievementStatus(status) {
        console.log(status);
    }
}
