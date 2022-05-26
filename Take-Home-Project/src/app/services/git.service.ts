import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitCommits, GitUser } from '../models/git.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }

  /**
   * Github API Request
   * @returns An observable of GitUser
   */
  getUser(): Observable<GitUser> {
    return this.http.get<GitUser>("https://api.github.com/users/The8Loop");
  }


  /**
   * Github API Request
   * @returns An observable of GitCommits
   */
  getCommits(): Observable<GitCommits[]> {
    return this.http.get<GitCommits[]>("https://api.github.com/repos/The8Loop/Crossroads-Group/commits");
  }
}