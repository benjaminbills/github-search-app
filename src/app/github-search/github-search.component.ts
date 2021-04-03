import { Component, OnInit } from '@angular/core';
import { Repository } from '../github-class/repository';
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
  repo: any;

  constructor(private githubService: GithubService) {
    this.user = new User('', '', '', '');
    this.repo = [];
  }

  ngOnInit(): void {}
  getUser() {
    // this.githubService.getUser2(this.newSearch.search).subscribe((response) => {
    //   this.user = response;
    //   console.log(this.user);
    // });

    this.githubService.getUser(this.newSearch.search);
    this.user = this.githubService.user;
  }
  // getRepo() {
  //   this.githubService.getRepo(this.newSearch.search).subscribe((response) => {
  //     this.repo = response;
  //     console.log(response);
  //     console.log(this.repo);
  //   });
  // }
  getRepo() {
    this.githubService.getRepo2(this.newSearch.search).then(() => {
      this.repo = this.githubService.repo;
    });
  }
}
