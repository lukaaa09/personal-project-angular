import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CLIENT_ID, CLIEN_SECRET } from '../credentionals/GithubsCred';
import { IUserRepos } from '../interfaces/github-repos-interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  userUrl = 'https://api.github.com/users'

  constructor(private http: HttpClient) { }
  public getProfile(searchQuery: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.userUrl}/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIEN_SECRET}`).pipe(
      retry(1),
      catchError(this.handleErrors)
    )
  }
  public getRepos(searchQuery: string): Observable<IUserRepos[]> {
    return this.http.get<IUserRepos[]>(`${this.userUrl}/${searchQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIEN_SECRET}`).pipe(
      retry(1),
      catchError(this.handleErrors)
    )
  }
  public handleErrors(error: HttpErrorResponse) {
    let errorMessage: string
    if (error.error instanceof ErrorEvent) {
      //client side error
      errorMessage = `MESSAGE : ${error.error.message}`
    }
    else {
      // server side error
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage)
  }
}
