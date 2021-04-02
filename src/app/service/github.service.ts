import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}
  getUser(username: string) {
    return this.http.get(
      `${environment.apiUrl}/${username}?access_token=${environment.apiKey}`
    );
  }
}
