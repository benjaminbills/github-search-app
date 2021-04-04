import { Component, OnInit } from '@angular/core';
import { Search } from '../github-class/search';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.component.html',
  styleUrls: ['./github-repo.component.css'],
})
export class GithubRepoComponent implements OnInit {
  newSearch = new Search('');
  repo: any;
  totalRecords!: any;
  page: any = 1;
  maxSize: any;
  constructor(private githubService: GithubService) {
    this.repo = [];
  }

  ngOnInit(): void {}

  getRepo() {
    this.githubService.getRepo2(this.newSearch.search).then(() => {
      this.repo = this.githubService.repo;
    });
  }
}
