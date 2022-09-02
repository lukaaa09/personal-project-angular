import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CLIENT_ID, CLIEN_SECRET } from '../credentionals/GithubsCred';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  userUrl = 'https://api.github.com/users'

  constructor(private http: HttpClient) { }

  public getProfile(searchQuery: any): Observable<any> {
    return this.http.get<any>(`${this.userUrl}/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIEN_SECRET}`).pipe(
      retry(1),
      catchError(this.handleErrors)
    )
  }

  public getRepos(searchQuery: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.userUrl}/${searchQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIEN_SECRET}`).pipe(
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
