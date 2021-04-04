import { Component, OnInit } from '@angular/core';
import { Repository } from '../github-class/repository';
import { Search } from '../github-class/search';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.component.html',
  styleUrls: ['./github-repo.component.css'],
})
export class GithubRepoComponent implements OnInit {
  newSearch = new Search('');
  repos: Repository | any;
  totalRecords!: any;
  page: any = 1;
  maxSize: any;
  constructor(private githubService: GithubService) {
    this.repos = [];
  }

  ngOnInit(): void {}

  getRepo() {
    this.githubService.getRepo(this.newSearch.search).then(() => {
      this.repos = this.githubService.repo;
    });
  }
}
