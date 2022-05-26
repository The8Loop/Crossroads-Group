import { Component, OnInit } from '@angular/core';
import { GitCommits, GitUser } from 'src/app/models/git.interface';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gitUser: GitUser = { login: "null" };
  gitCommits: GitCommits[] = [];

  constructor(private gitService: GitService) { }

  ngOnInit(): void {
    this.gitService.getUser().subscribe(user => this.gitUser = user);
    this.gitService.getCommits().subscribe(commit => this.gitCommits = commit);
  }

}
