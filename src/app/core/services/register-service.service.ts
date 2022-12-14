import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILogin,  } from '../interfaces/login.interfaces';
import { IUserPayload } from '../interfaces/user-payload.interface';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = 'http://localhost:3000'
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) { 
    if(localStorage.getItem('token')) {
      this.isLoggedIn.next(true)
    }
  }
  public getAllUsers() {
    return this.http.get(`${this.baseUrl}/user`)
  }

  public loginuser(user: IUserPayload): Observable<ILogin> {
    return this.http.post<ILogin>(`${this.baseUrl}/login`, user)
  }
  public registerUser(user: IUserPayload): Observable<ILogin> {
    return this.http.post<ILogin>(`${this.baseUrl}/register`, user)
  }

  public logOutUser() {
    localStorage.clear()
    this.isLoggedIn.next(false)
    this.router.navigateByUrl('/').then()
  }

}
