import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users'
  pageLimit = 10
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) { }

  public getAllUsers(): Observable<any[]> {
    return this.http.get<[]>(`${this.apiUrl}?per_page=${this.pageLimit}`)
  }
  
  public getUsers(username: any): Observable <{}>{
    return this.http.get<{}>(`${this.apiUrl}/${username}`)
  }
  public getFavourite(username: any){
    return this.http.get(`${this.apiUrl}/${username}`)
  }
  logOutUser(){
    localStorage.clear()
    this.router.navigateByUrl('/').then()
  }


}
