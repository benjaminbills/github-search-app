import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Search } from '../github-class/search';
import { User } from '../github-class/user';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css'],
})
export class GithubUserComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;

  newSearch = new Search('');
  user: any;
  repo: any;
  totalRecords!: any;
  page: any = 1;
  maxSize: any;
  showRepo: boolean = false;
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.showRepo = false;
    this.githubService.getUser('benjaminbills');
    this.user = this.githubService.user;
  }
  getUser() {
    this.showRepo = false;
    this.githubService.getUser(this.newSearch.search);
    this.user = this.githubService.user;
    this.repo = this.githubService.repo;
  }
  getRepo(username: string) {
    this.showRepo = true;
    this.githubService.getUserRepo(username);
    this.repo = this.githubService.repo;
  }
}
