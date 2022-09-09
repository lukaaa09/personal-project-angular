import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, switchMap,} from 'rxjs';
import { IUserRepos } from 'src/app/core/interfaces/github-repos-interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  public currentUserName: string | null = ''
  public currentGithubUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({}as IUser);
  public arr: IUser[] = []
  public userRepositories: BehaviorSubject<IUserRepos[]> = new BehaviorSubject<IUserRepos[]>([]);
  constructor(private userservice: UserService, private actevatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUserName = this.actevatedroute.snapshot.paramMap.get('username')
    this.singleUser()
    if (localStorage.getItem('favorite')) {
      this.arr = JSON.parse(localStorage.getItem('favorite')!)
    }
  }
  public singleUser() {
    this.userservice.getUser(this.currentUserName).pipe(
      switchMap((data: IUser): Observable<IUserRepos[]> => {
        this.currentGithubUser.next(data)
        return this.userservice.getRepos(data.repos_url)
      })
    ).subscribe((repos: IUserRepos[]) => {
      this.userRepositories.next(repos)
    })
  }
  
  public saveData() {
    let z = confirm('Are you sure you want to add this user to favorites')
    if(z) {
      this.arr.push(this.currentGithubUser.getValue() as IUser)
    }
    localStorage.setItem('favorite', JSON.stringify(this.arr))
  }

}
