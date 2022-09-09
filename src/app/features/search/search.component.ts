import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, Subject, tap } from 'rxjs';
import { IUserRepos } from 'src/app/core/interfaces/github-repos-interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SearchComponent implements OnInit {
  public githubUserQuery!: string ;
  public githubProfile: Subject<IUser> = new Subject<IUser>()
  public githubRepos: Subject<IUserRepos[]> = new Subject<IUserRepos[]>()
  public errorMessage: string | undefined;
  constructor(private router: Router, private userservice: SearchService
  ) { }

  ngOnInit(): void {
  }
  public navigateToDashboard() {
    this.router.navigateByUrl('/dashboard').then()
  }
  public searchUser() {
    this.userservice.getProfile(this.githubUserQuery).pipe(
      tap((data: IUser) => {
        this.githubProfile.next(data)

      }),
      catchError((err: string) => {
        alert(err) 
          return of(err)
        
      })
    ).subscribe()

    this.userservice.getRepos(this.githubUserQuery).pipe(
      tap((data: IUserRepos[]) => {
        this.githubRepos.next(data)
      }),
      catchError((err: string) => {
        alert(err)
        return of(err)
      })
    ).subscribe()

  }
}




