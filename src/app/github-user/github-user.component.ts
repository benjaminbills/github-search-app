import { Component, OnInit } from '@angular/core';
import { Search } from '../github-class/search';
import { User } from '../github-class/user';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css'],
})
export class GithubUserComponent implements OnInit {
  newSearch = new Search('');
  user: any;
  repo: any;

  constructor(private githubService: GithubService) {
    this.repo = [];
  }

  ngOnInit(): void {}
  getUser() {
    this.githubService.getUser(this.newSearch.search);
    this.user = this.githubService.user;
  }
}
