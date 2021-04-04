import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repository } from '../github-class/repository';
import { User } from '../github-class/user';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  user: User;
  repo: Repository[] = [];
  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '');
  }

  getUser(username: string) {
    //console.log(username);

    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<any>(`${environment.apiUrl}users/${username}`)
        .toPromise()
        .then(
          (response) => {
            this.user.avatar_url = response.avatar_url;
            this.user.bio = response.bio;
            this.user.follower = response.follower;
            this.user.login = response.login;

            resolve();
            console.log(this.user);
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    });
    return promise;
  }
  // getUser2(username: string) {
  //   return this.http.get(`${environment.apiUrl}users/${username}`);
  // }
  getRepo(repository: string) {
    return this.http.get(
      `${environment.apiUrl}search/repositories?q=${repository}`
    );
  }
  getRepo2(repository: string) {
    interface ApiResponse {
      items: Repository[];
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<any>(
          `${environment.apiUrl}search/repositories?per_page=7&q=${repository}`
        )
        .toPromise()
        .then(
          (response) => {
            this.repo = response.items;
            resolve();
            console.log('from service:', this.repo);
          },
          (error) => {
            console.log(error);
          }
        );
    });
    return promise;
  }
}
