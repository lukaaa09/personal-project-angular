import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users'
  followers = 'https://api.github.com/users/mojombo/followers'
  pageLimit = 10
  constructor(private http: HttpClient) { }

  public getAllUsers() {
    return this.http.get(`${this.apiUrl}?per_page=${this.pageLimit}`)
  }

  public getFolloers() {
    return this.http.get(`${this.followers}`)
  }

  public getUser(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${username}`)

  }
}
