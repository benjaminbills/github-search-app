import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environmentUrl } from 'src/environments/key';
import { Repository } from '../github-class/repository';
import { User } from '../github-class/user';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  user: User;
  repo: any;
  constructor(
    private http: HttpClient,
    private notifyService: NotificationService
  ) {
    this.user = new User('', '', 0, '', '', '', '');
  }

  getUser(username: string) {
    //console.log(username);

    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<any>(`${environmentUrl.apiUrl}users/${username}`)
        .toPromise()
        .then(
          (response) => {
            this.user.avatar_url = response.avatar_url;
            this.user.bio = response.bio;
            this.user.followers = response.followers;
            this.user.login = response.login;
            this.user.location = response.location;
            this.user.repos = response.public_repos;
            this.user.url = response.html_url;
            if (response.public_repos > 0) {
              this.repo = this.getUserRepo(response.login);
              console.log(this.repo);
              resolve();
            }
            resolve();

            console.log(response);
          },
          (error) => {
            console.log(error);
            this.notifyService.showError(error.error.message, error.status);
          }
        );
    });
    return promise;
  }

  getRepo(repository: string) {
    interface ApiResponse {
      items: Repository[];
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<any>(
          `${environmentUrl.apiUrl}search/repositories?per_page=500&q=${repository}`
        )
        .toPromise()
        .then(
          (response) => {
            this.repo = response.items;
            console.log(this.repo);
            if (response.items.length == 0) {
              this.notifyService.showError(
                'There are no repository with such name',
                '404'
              );
            }
            resolve();
          },
          (error) => {
            console.log(error);

            this.notifyService.showError(error.error.message, error.status);
          }
        );
    });
    return promise;
  }
  getUserRepo(username: string) {
    interface ApiResponse {
      items: Repository[];
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<any>(`${environmentUrl.apiUrl}users/${username}/repos`)
        .toPromise()
        .then(
          (response) => {
            this.repo = response;
            resolve();
            console.log('from service:', this.repo);
          },
          (error) => {
            alert(error);
          }
        );
    });
    return promise;
  }
}
