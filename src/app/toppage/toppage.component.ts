import { Component, OnInit } from '@angular/core';
import { GithubService } from "../github-service/github.service";

@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.css']
})
export class ToppageComponent implements OnInit {

  user: any;
  repos: any;
  username: any;
  constructor(private githubService: GithubService) {
    this.githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    });
  }
  search() {
    this.githubService.updateUsername(this.username);

    this.githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    });
  }

  ngOnInit() { }
}
