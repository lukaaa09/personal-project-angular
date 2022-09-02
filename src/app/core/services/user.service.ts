import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users'
  pageLimit = 10
  constructor(private http: HttpClient) { }

  public getAllUsers() {
    return this.http.get(`${this.apiUrl}?per_page=${this.pageLimit}`)
  }


}
