import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    server = 'http://1620202.economfa.web.hosting-test.net';

    constructor(private http: HttpClient) {
    }

    getUsers(successCallback, errorCallback) {
        this.http.get(`${this.server}/users`)
            .subscribe(
                data => {
                    successCallback(data);
                },
                error => {
                    errorCallback(error);
                }
            );
    }

    getAchievements(successCallback, errorCallback) {
        this.http.get(`${this.server}/achievements`)
            .subscribe(
                data => {
                    successCallback(data);
                },
                error => {
                    errorCallback(error);
                }
            );
    }

    updateAchievement(achievement_id, formData, successCallback, errorCallback) {
        this.http.post(`${this.server}/achievements/${achievement_id}`,
            formData)
            .subscribe(
                data => {
                    successCallback(data);
                },
                error => {
                    errorCallback(error);
                }
            );
    }

    updateAchievementStatus(achievement_id, formData, successCallback, errorCallback) {
        this.http.post(`${this.server}/achievements/${achievement_id}/update-state`,
            formData)
            .subscribe(
                data => {
                    successCallback(data);
                },
                error => {
                    errorCallback(error);
                }
            );
    }
}
