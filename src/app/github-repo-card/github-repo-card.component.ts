import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repo-card',
  templateUrl: './github-repo-card.component.html',
  styleUrls: ['./github-repo-card.component.css'],
})
export class GithubRepoCardComponent implements OnInit {
  @Input() repo!: any;
  constructor() {}

  ngOnInit(): void {}
}
