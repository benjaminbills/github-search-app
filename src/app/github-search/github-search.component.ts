import { Component, OnInit } from '@angular/core';
import { Search } from '../github-class/search';
import { User } from '../github-class/user';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css'],
})
export class GithubSearchComponent implements OnInit {
  newSearch = new Search('');
  user: any;
  constructor(private githubService: GithubService) {
    this.user = new User('', '', '', '');
  }

  ngOnInit(): void {}
  getUser() {
    this.githubService.getUser2(this.newSearch.search).subscribe((response) => {
      this.user = response;
      console.log(this.user);

      // this.user.bio = response.values;
      // this.user.follower = response.follower;
      // this.user.login = response.login;
    });
    //this.user = this.githubService.user;

    //this.githubService.getUser(this.newSearch.search);
  }
}
