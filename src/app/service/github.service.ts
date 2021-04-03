import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../github-class/user';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  user: User;
  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '');
  }
  getUser1(username: string): any {
    // return this.http.get(
    //   `${environment.apiUrl}/${username}?access_token=${environment.apiKey}`
    // );
  }
  getUser(username: string) {
    //console.log(username);

    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<any>(`${environment.apiUrl}/${username}`)
        .toPromise()
        .then((response) => {
          // this.user.avatar_url = response.avatar_url;
          // this.user.bio = response.bio;
          // this.user.follower = response.follower;
          // this.user.login = response.login;
          return response;
          console.log(this.user);
        });
    });
    return promise;
  }
  getUser2(username: string) {
    return this.http.get(`${environment.apiUrl}/${username}`);
  }
}
