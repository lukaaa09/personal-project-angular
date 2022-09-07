import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserServiceService } from 'src/app/core/services/register-service.service';
import { SearchService } from 'src/app/core/services/search.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DashboardComponent implements OnInit {
  public username: any
  public githubUsers: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public githubUserQuery: string | undefined;
  public githubProfile: any;
  public githubRepos: any[] | undefined
  public getUser = localStorage.getItem('username')

  constructor(private userservice: UserService,
    private router: Router,
    private searchService: SearchService,
    private register: UserServiceService
  ) { }
  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe(users => {
      this.githubUsers.next(users)
    })

  }
  public getUserPage(username: any) {
    this.router.navigateByUrl(`/user/${username}`).then()

  }
  public shouldShowMore() {
    this.userservice.pageLimit += 10;
    this.userservice.getAllUsers().subscribe(users => {
      this.githubUsers.next(users)
    })
  }
  public navigateToSearch() {
    this.router.navigateByUrl('/search').then()
  }
  public navigateToFav() {
    this.router.navigateByUrl('/favourite').then()
  }
}
