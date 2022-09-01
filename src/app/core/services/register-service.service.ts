import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }


  public getAllUsers(){
    return this.http.get(`${this.baseUrl}/user`)
  }
  public loginuser(user: any) {
    return this.http.post(`${this.baseUrl}/login`, user)
  }
  public registerUser(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user)
  }
}
