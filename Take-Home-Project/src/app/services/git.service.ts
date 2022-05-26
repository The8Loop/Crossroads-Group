import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitUser } from '../models/git.interface';
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
}