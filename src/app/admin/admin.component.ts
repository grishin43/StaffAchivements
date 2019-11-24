import {Component, OnInit} from '@angular/core';
import {AchievementsListService} from '../achievements-list.service';
import {UsersListService} from '../users-list.service';

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
    searchText: string;

    constructor(private userContent: UsersListService, private achievementsContent: AchievementsListService) {
    }

    ngOnInit() {
        this.usersList = this.userContent.getUsersList();
        this.achievementsList = this.achievementsContent.getAchievementsList();
    }

    setSelectedUser(userObj, userIndex) {
        this.selectedUser = userObj;
        this.selectedUserIndex = userIndex;
    }

    updateUserAchievementStatus(status) {
        console.log(status);
    }

    setSearchText(text) {
        this.searchText = text;
    }

}
