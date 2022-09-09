import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  Observable } from 'rxjs';
import { IUserRepos } from '../interfaces/github-repos-interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users'
  pageLimit = 10

  constructor(private http: HttpClient, private router: Router) { }

  public getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.apiUrl}?per_page=${this.pageLimit}`)
  }

  public getUser(username: string | null): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/${username}`)
  }
  public getRepos(url: string): Observable<IUserRepos[]> {
    return this.http.get<IUserRepos[]>(url)
  }

}
