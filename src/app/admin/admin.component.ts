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
    selectedUser: any;
    selectedUserIndex: number;

    constructor(private content: UsersListService) {
    }

    ngOnInit() {
        this.usersList = this.content.getUsersList();
    }

    setSelectedUser(userObj, userIndex) {
        this.selectedUser = userObj;
        this.selectedUserIndex = userIndex;
        console.log(userObj);
    }


}
