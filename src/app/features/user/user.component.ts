import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  public currentUserName: string | null = ''
  public currentGithubUser: BehaviorSubject<any> = new BehaviorSubject<{}>({});
  public user: any
  public arr: any[] = []
  public userRepositories: BehaviorSubject<any> = new BehaviorSubject<[]>([]);
  num = 0
  constructor(private userservice: UserService, private actevatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUserName = this.actevatedroute.snapshot.paramMap.get('username')
    this.singleUser()
    if (localStorage.getItem('favorite')) {
      this.arr = JSON.parse(localStorage.getItem('favorite')!)
    }
  }
  public singleUser() {
    this.userservice.getUsers(this.currentUserName).pipe(
      switchMap((data: any): any => {
        console.log(data)
        this.currentGithubUser.next(data)
        this.getUserRepositories(data)
      })
    ).subscribe()
  }
  public getUserRepositories(userData: any) {
    this.userservice.getRepos(userData.repos_url).subscribe((repos: any) => {
      this.userRepositories.next(repos)
    })
  }
  public saveData() {
    let z = confirm('Are you sure you want to add this user to favorites')
    if(z) {
      this.arr.push(this.currentGithubUser.getValue())
    }
    localStorage.setItem('favorite', JSON.stringify(this.arr))
    this.num++
  }

}
